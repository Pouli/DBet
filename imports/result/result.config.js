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

export default ResultConfig.initRoute;