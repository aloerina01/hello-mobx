# hello-mobx

Hello MobX ( with React )

## Today I Learned

#### mobx の使用感

* decorator を babe るには`transform-decorators-legacy`が必要だった
* `Provider`は子供を復数持てない(children.only)
* `@observer`は`Component#render`を`mobx.autorun`でラップする
* observer component に props で store を渡すのは非推奨で、基本は`inject`を使うべし(？)
  * バケツリレーを減らせそうで良さげ
  * [Connect components to provided stores using inject](https://mobx.js.org/refguide/observer-component.html#connect-components-to-provided-stores-using-inject)
  * the syntax to inject stores has changed since mobx-react 4, always use inject(stores)(component) or @inject(stores) class Component.... Passing store names directly to observer is deprecated.
* observable な要素の形をいろいろ想定しているのがいい
  * 「vuex の場合配列は変更をいい感じに検知できない」みたいなのがなさそう
* https://github.com/mobxjs/mobx/issues/1082 にぶち当たった
  * vscode が勝手に別のものを import していただけ…
* array を observable にする
  * `observable.array()`, `observable([])`, `observable.array([])` どれでもできた
  * `observable()`は引数の型をみて適切な型の observable をつくる感じかな？
  * `observable.array()`は空の配列型の observable をつくる
  * `observable.array()`は引数の配列を Base にできる
* vscodeがDecoratorに対してアラート上げてくる(怒)ときは`jsconfig.json`をつくるといい

```js
// jsconfig.json
{
    "compilerOptions": {
        "experimentalDecorators": true,
    }
}
```

#### Flow を試した

* CLI で flow を実行するには`flow-bin`を npm install する
* `flow-typed`をつかってライブラリの型情報をとってきて、`./flow-typed`以下に配置する
* CLI より vscode 内でエラー箇所をハイライトしてほしいので Plugin を使うことにする
* mobx の型が`flow-typed`に存在しない
  * flow-typed は自身のパッケージ内に各ライブラリの型情報をもっている
  * でもできたばっかりのライブラリとかの型情報は登録されていない
  * ので、そういうライブラリは自身のパッケージ内に`hoge.js.flow`を定義することができる
  * `hoge.js`とそれに型情報を付加してある`hoge.js.flow`という関係
* 結局`Cannot resolve module mobx.`のエラーを解消できなかった
* あと結局書いてみたら色々めんどくさくて嫌になった
  * オブジェクトのプロパティひとつひとつに型を書くの面倒くさい
  * `React.Component<T>`のTの定義とかも面倒くさいし直感的じゃないって感じてしまった
    * `extends React.Component<>`ほうに`props`の型を定義するのがしっくりこない
    * propsのプロパティの型定義じゃなくて、Modelの型をそのままぶち込みたい(やろうと思えば出来る気もする)
    * ジェネリクスって呼び出し側で型指定するもんだと思ってたんだけどなあ…

**こんな感じに書けるのが、自分にとっての"直感的"だった**
```js
class ProfileComponent<T extends Profile> {
  props: T;
  setProps(value: T): void {
    this.props = value;
  }
  get props(): T {
    return props;
  }
  mount(): void {/** 省略 */}
}

class UserProfile extends Profile {
  userName: String,
  vio: ?String
}

const userProfile: UserProfile = fetch();
const profileComponent = new ProfileComponent<UserProfile>();
profileComponent.setProps(userProfile);
profileComponent.mount('#app');
```

**でも実際はなんかちがう…**  
半分はReactのComponentの仕組みの都合もあるのだろうけど…
```js
const Props = {
  id: Number,
  name: String,
  vio?: String
}

class ProfileComponent extends React.Component<Props> {
  // 省略
}

const userProfile: UserProfile = fetch();
ReactDOM.render(
  <ProfileComponent props={userProfile} />,
  document.getElementById('app');
)
```
