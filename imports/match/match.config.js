class MatchConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('match', {
                url: '/match',
                views: {
                    'content@': {
                        templateUrl: 'imports/match/list/list.template.html',
                        controller: 'ListController as ctrl',
                        resolve: {
                            currentUser($q) {
                                if (Meteor.userId() === null) {
                                    return $q.reject('AUTH_REQUIRED');
                                } else {
                                    return $q.resolve();
                                }
                            }
                        }
                    }
                }
            });
    }
}

export default MatchConfig.initRoute;
