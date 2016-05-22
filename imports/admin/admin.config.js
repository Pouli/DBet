class AdminConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                resolve: {
                    isLoggedIn: (AuthService) => {
                        return AuthService.isLoggedIn();
                    },
                    isRoleAuthorized: (AuthService) => {
                        return AuthService.isRoleAuthorized('ROLE_ADMIN');
                    }
                }
            })
            .state('admin.match', {
                url: '/match',
                views: {
                    'content@': {
                        template: '<admin-match></admin-match>'
                    }
                }
            })
            .state('admin.team', {
                url: '/team',
                views: {
                    'content@': {
                        template: '<admin-team></admin-team>'
                    }
                }
            })
            .state('admin.team.creation', {
                url: '/creation',
                views: {
                    'content@': {
                        template: '<admin-team-creation></admin-team-creation>'
                    }
                }
            })
            .state('admin.team.edition', {
                url: '/:id',
                views: {
                    'content@': {
                        template: '<admin-team-edition></admin-team-edition>'
                    }
                }
            });
    }
}

export default AdminConfig.initRoute;
