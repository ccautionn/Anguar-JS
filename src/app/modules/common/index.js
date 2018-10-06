import angular from 'angular';

import HeaderDirective from './directive/HeaderDirective';


export default angular.module("common",[])
    .directive('ngHeader',()=> new HeaderDirective()).name;  

