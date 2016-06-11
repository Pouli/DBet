class ProfileConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('profile', {
                url: '/profile',
                views: {
                    'content@': {
                        template: '<profile></profile>'
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

export default ProfileConfig.initRoute;
