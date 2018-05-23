import { observable, action } from 'mobx';

export default class ContentList {
    contents = observable.array([]);

    @action
    fetch = () => {
        console.log('call fetch', this);
        this.contents.push({title: 'google', url: 'https://www.google.co.jp/'});
        this.contents.push({title: 'line', url: 'https://line.me/ja/'});
        this.contents.push({title: 'twitter', url: 'https://twitter.com/'});
        this.contents.push({title: 'qiita', url: 'https://qiita.com/'});
        this.contents.push({title: 'yahoo', url: 'https://www.yahoo.co.jp/'});
    }
}