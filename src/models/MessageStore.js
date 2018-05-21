import { observable, action } from 'mobx';

export default class MessageStore {
  @observable message = 'mobx';

  @action.bound
  setMessage(val) {
    this.message = val;
  }
}