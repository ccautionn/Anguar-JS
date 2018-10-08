import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import GithubController from './controller/githubController';

import GithubService from './service/github.service';

export default angular.module('GitHub', [uirouter])
    .config(routes)
    .controller("GithubController", GithubController)
    .service("GithubService",GithubService)
    .name