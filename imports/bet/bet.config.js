class BetConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('bet', {
                url: '/bet',
                views: {
                    'content@': {
                        template: '<bet-main></bet-main>'
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

export default BetConfig.initRoute;
