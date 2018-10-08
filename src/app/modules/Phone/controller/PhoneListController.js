export default class PhoneListController{
  
  constructor(PhoneService) {
    this.PhoneService = PhoneService;
    this.phones=[];

    this.orderProp = 'age';

    this.getPhoneList();
  }

  getPhoneList(){
    var _self = this;
    this.PhoneService.getPhoneList().then(function(data){
      _self.phones=data;    
    }, this.onError);
  }

  onError(e) {
    console.log(e);
  }
}

PhoneListController.$inject=["PhoneService"];