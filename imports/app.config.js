class AppConfig {
    static initRoute($locationProvider, $urlRouterProvider) {
        'ngInject';

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/match');
    }
}

export default AppConfig.initRoute;
