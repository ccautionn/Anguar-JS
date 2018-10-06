import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';

//modules
import main  from './modules/main';

angular.module('app',[
    uirouter,
    main])
       .config(routing);