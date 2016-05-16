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
            .state('admin.team', {
                url: '/admin/team',
                views: {
                    'content@': {
                        template: '<admin-team></admin-team>'
                    }
                }
            })
            .state('admin.team.creation', {
                url: '/admin/team/creation',
                views: {
                    'content@': {
                        template: '<admin-team-creation></admin-team-creation>'
                    }
                }
            });
    }
}

export default AdminConfig.initRoute;
