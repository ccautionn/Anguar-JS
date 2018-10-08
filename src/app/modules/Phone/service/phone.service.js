export default class PhoneService{
    constructor($http)
    {
        this.$http=$http;
    }

    getPhoneList(){
        return this.$http.get("phones.json").then(function(response){
            return response.data;
        });
    }

    getPhoneDetail(phoneId)
    {
        var url='phones/' + phoneId + '.json';
        return this.$http.get(url).then(function(response){
            return response.data;
        });
    }
}

PhoneService.$inject = ['$http'];