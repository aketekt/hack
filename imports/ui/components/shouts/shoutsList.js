import angular from 'angular';
import angularMeteor from 'angular-meteor';

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
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: ShoutsList

});
