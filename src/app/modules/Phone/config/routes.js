/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('phones', {
      url: '/phones',
      template: require("../view/phone.html"),
      controller: 'PhoneController',
      controllerAs: 'Phone'
    })
    .state('phones.list', {
      url: '/',
      template: require('../view/phonelist.html')
    })
    .state('phones.detail', {
      url: "/phonedetail?phoneId",
      template: require("../view/phonedetail.html"),
      controller: "PhoneDetailController",
      controllerAs: "PhoneDetail",
      params: { phoneId: null },
      resolve: {}
    });
}