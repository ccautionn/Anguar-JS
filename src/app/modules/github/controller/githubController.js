export default class GithubController {
    constructor(GithubService){
        this.GithubService=GithubService;
        this.title="Github Module - Ne haber"; 

        this.users=[]; 
        
        this.getUsers();
    }

    getUsers(){
        var _self = this;
        this.GithubService.getUserList().then(function(data){
            _self.users=data;
        });
    };
}

GithubController.$inject=['GithubService'];    