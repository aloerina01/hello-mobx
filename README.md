# hello-mobx
Hello MobX ( with React )

## Today I Learned
- decoratorをbabeるには`transform-decorators-legacy`が必要だった
- `Provider`は子供を復数持てない(children.only)
- `@observer`は`Component#render`を`mobx.autorun`でラップする
- observer componentにpropsでstoreを渡すのは非推奨で、基本は`inject`を使うべし(？)
    - バケツリレーを減らせそうで良さげ
    - [Connect components to provided stores using inject](https://mobx.js.org/refguide/observer-component.html#connect-components-to-provided-stores-using-inject)
    -  the syntax to inject stores has changed since mobx-react 4, always use inject(stores)(component) or @inject(stores) class Component.... Passing store names directly to observer is deprecated.
- observableな要素の形をいろいろ想定しているのがいい
    - 「vuexの場合配列は変更をいい感じに検知できない」みたいなのがなさそう
- https://github.com/mobxjs/mobx/issues/1082 にぶち当たった
- vscodeがDecoratorに対してアラート上げてくる(怒)ときは`jsconfig.json`をつくるといい

```js
// jsconfig.json
{
    "compilerOptions": {
        "experimentalDecorators": true,
    }
}
```

- 