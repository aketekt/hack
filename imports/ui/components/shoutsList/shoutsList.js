import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './shoutsList.html';

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
  angularMeteor

]).component(name, {
  template,
  controllerAs: name,
  controller: ShoutsList

});
