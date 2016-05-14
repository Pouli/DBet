class AppController {
    /*@ngInject*/
    constructor ($rootScope) {
        $rootScope.$on('EVENT-message', (event, message) => Materialize.toast(message , 4000));
    }
}

export default AppController;
