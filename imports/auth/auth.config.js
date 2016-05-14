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
                }
            })
            .state('signup', {
                url: '/signup',
                views: {
                    'content@': {
                        template: '<signup></signup>'
                    }
                }
            });
    }
}

export default AuthConfig.initRoute;
