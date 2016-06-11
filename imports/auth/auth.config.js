class AuthConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'content@': {
                        template: '<login></login>'
                    }
                },
                resolve: {
                    needLogout: (AuthService) => {
                        return AuthService.needLogout();
                    }
                }
            })
            .state('signup', {
                url: '/signup',
                views: {
                    'content@': {
                        template: '<signup></signup>'
                    }
                },
                resolve: {
                    needLogout: (AuthService) => {
                        return AuthService.needLogout();
                    }
                }
            });
    }
}

export default AuthConfig.initRoute;
