
import angular from 'angular';
import angularMeteor from 'angular-meteor';
angular.module('outr', [
  angularMeteor
])
.component('shoutsList', {
  templateUrl: 'client/shoutsList.html',
  controllerAs: 'shoutsList',
  controller($scope, $reactive) {
  'ngInject';

  $reactive(this).attach($scope);

  this.helpers({
    shouts() {
      return Shouts.find({});
    }
  });
}

});
