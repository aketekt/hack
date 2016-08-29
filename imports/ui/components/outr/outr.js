
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './outr.html';
import { name as ShoutsList } from '../shoutsList/shoutsList';

class Outr {}

const name = 'outr';

// create a module

export default angular.module(name, [
  angularMeteor,
  ShoutsList
]).component(name, {
  template,
  controllerAs: name,
  controller: Outr
});
