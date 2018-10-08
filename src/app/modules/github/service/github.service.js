export default class GithubService {
    constructor($http) {
        this.$http = $http;
    }

    getUserList() {
        var url = "https://api.github.com/users";
        return this.$http.get(url).then(function (response) {
            return response.data;
        }, this.onError);
    }

    onError(ex) {
        console.error(ex);
    }
}

GithubService.$inject=['$http'];