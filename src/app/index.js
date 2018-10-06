import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';

//modules
import common from './modules/common';
import main  from './modules/main';

angular.module('app',[
    uirouter,
    common,
    main])
       .config(routing);