class AdminConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('admin', {
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
            });
    }
}

export default AdminConfig.initRoute;
