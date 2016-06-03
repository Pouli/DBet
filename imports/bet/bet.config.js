class BetConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('match', {
                url: '/match',
                views: {
                    'content@': {
                        template: '<bet-main></bet-main-match>'
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

export default BetConfig.initRoute;
