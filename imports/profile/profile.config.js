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
                    currentUser($q) {
                        if (Meteor.userId() === null) {
                            return $q.reject('AUTH_REQUIRED');
                        } else {
                            return $q.resolve();
                        }
                    }
                }
            });
    }
}

export default ProfileConfig.initRoute;
