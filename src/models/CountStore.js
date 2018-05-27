// @flow

import { observable, action } from "mobx";

export default class CountStore {
  @observable count = 0;

  @action.bound
  increment() {
    console.log("call", this.count);
    this.count++;
  }
}
