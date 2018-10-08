export default class PhoneController{
    constructor(PhoneService) {
        this.PhoneService = PhoneService;
        this.phones=[];
        this.title="Phone Module";
    
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

PhoneController.$inject=["PhoneService"];