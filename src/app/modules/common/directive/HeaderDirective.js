
import HeaderController from '../controller/headerController';

/*@ngInject*/
export default class HeaderDirective {
  constructor() {
    this.template = require('../view/header.html');
    this.bindToController = true;
    this.controllerAs = 'header';
    this.restrict = 'E';
    this.scope = {};
    this.controller = HeaderController;
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes, controller) {
    
  }
}