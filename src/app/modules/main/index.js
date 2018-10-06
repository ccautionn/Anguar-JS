import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import  { MainController } from './controller/MainController';

export default angular.module('main', [uirouter])
    .config(routes)
    .controller('MainController', MainController)
    .name;