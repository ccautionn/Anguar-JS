import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import  PhoneListController  from './controller/PhoneListController';
import PhoneDetailController from './controller/PhoneDetailController';
import  PhoneService from './service/phone.service';

export default angular.module('main', [uirouter])
    .config(routes)
    .controller('PhoneListController', PhoneListController) 
    .controller("PhoneDetailController",PhoneDetailController)
    .service("PhoneService",PhoneService)
    .name;