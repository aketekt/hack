import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Outr } from '../imports/ui/components/outr/outr';

Router.route('/', function () {
  this.render('Home');
});
