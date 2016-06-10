class AppConfig {
    static initRoute($locationProvider, $urlRouterProvider) {
        'ngInject';

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/bet');
    }
}

export default AppConfig.initRoute;
