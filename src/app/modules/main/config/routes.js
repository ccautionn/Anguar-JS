/*@ngInject*/
export default ($stateProvider) => {
    $stateProvider
      .state('main', {
        url: '/',
        template: require('../view/main.html'),
        controller: 'MainController',
        controllerAs: 'Main',
        resolve: {
          
        }
      });
  }