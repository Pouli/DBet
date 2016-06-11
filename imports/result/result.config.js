class ResultConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('result', {
                url: '/result',
                views: {
                    'content@': {
                        template: '<result-main></result-main>'
                    }
                },
                resolve: {
                    isLoggedIn: (AuthService) => {
                        return AuthService.isLoggedIn();
                    }
                }
            });
    }
}

export default ResultConfig.initRoute;