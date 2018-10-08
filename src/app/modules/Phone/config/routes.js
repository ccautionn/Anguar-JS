/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('phonelist', {
      url: '/phone',
      template: require('../view/phonelist.html'),
      controller: 'PhoneListController',
      controllerAs: 'PhoneList',
      resolve: {}
    })
    .state('detail', {
      url: "/phonedetail?phoneId",
      template: require("../view/phonedetail.html"),
      controller: "PhoneDetailController",
      controllerAs: "PhoneDetail",
      params: { phoneId: null },
      resolve:{}
    });
}