import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './shoutAdd.html';
import { Shouts } from '../../../api/shouts';


class ShoutAdd {
  constructor() {
    this.shout = {};
  }
  submit() {
    Shouts.insert(this.shout);
    this.reset();
  }
  reset() {
    this.shout ={};
  }
}

const name = 'shoutAdd';

// create a module

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ShoutAdd
});
