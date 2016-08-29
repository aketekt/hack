import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './shoutsList.html';
import { Shouts } from '../../../api/shouts';
import { name as ShoutAdd } from '../shoutAdd/shoutAdd';

class ShoutsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      shouts() {
        return Shouts.find({});
      }
    });
  }
}

const name = 'shoutsList';

// create a module

export default angular.module(name, [
  angularMeteor,
  ShoutAdd
]).component(name, {
  template,
  controllerAs: name,
  controller: ShoutsList

});
