export default class PhoneDetailController{

    constructor(PhoneService,$stateParams){
        this.PhoneService=PhoneService;
        this.$stateParams=$stateParams;
        
        this.phoneId=$stateParams.phoneId;

        this.phone={};

        this.getPhoneDetail(this.phoneId);

    }

    getPhoneDetail(phoneId){
        var _self=this;
        this.PhoneService.getPhoneDetail(phoneId).then(function(data){
        _self.phone=data;
        }
        ,this.onError);
    }

    onError(e) {
        console.log(e);
      }

}


PhoneDetailController.$inject=["PhoneService","$stateParams"];