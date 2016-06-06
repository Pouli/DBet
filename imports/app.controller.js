class AppController {
    /*@ngInject*/
    constructor ($rootScope) {
        $rootScope.$on('EVENT-message', (event, message) => Materialize.toast(message , 4000));
        $rootScope.$on('EVENT-message-quick', (event, message) => Materialize.toast(message , 1500));
    }
}

export default AppController;
