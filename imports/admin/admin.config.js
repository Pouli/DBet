class AdminConfig {
    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('admin', {
                url: '/admin/team',
                views: {
                    'content@': {
                        template: '<p>test</p>'
                    }
                },
                resolve: {
                    isLoggedIn: (AuthService) => {
                        return AuthService.isLoggedIn();
                    },
                    isRoleAuthorized: (AuthService) => {
                        return AuthService.isRoleAuthorized('ROLE_ADMIN');
                    }
                }
            });
    }
}

export default AdminConfig.initRoute;
