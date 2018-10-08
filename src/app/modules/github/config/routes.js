export default ($stateProvider) => {
    $stateProvider
        .state('github', {
            url: '/github',
            template: require("../view/github.html"),
            controller: 'GithubController',
            controllerAs: 'Github'
        });
}