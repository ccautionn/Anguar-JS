import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import routing from './config';

//modules
import common from './modules/common';
import Phone from './modules/Phone';

angular.module('app',[
    uirouter,
    sanitize,
    common,
    Phone])
       .config(routing);