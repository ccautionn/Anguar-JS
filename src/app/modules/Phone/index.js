import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import PhoneController from './controller/PhoneController';
// import  PhoneListController  from './controller/PhoneListController';
import PhoneDetailController from './controller/PhoneDetailController';
import  PhoneService from './service/phone.service';

export default angular.module('main', [uirouter])
    .config(routes)
    // .controller('PhoneListController', PhoneListController) 
    .controller("PhoneDetailController",PhoneDetailController)
    .controller("PhoneController",PhoneController)
    .service("PhoneService",PhoneService)
    .name;