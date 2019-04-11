import {observable, action} from 'mobx';

class HomeStore {
    @observable sum: number = 0

    @action
    add = (num1: number, num2: number) => {
        this.sum = num1 + num2;
    }
}

export default new HomeStore;
