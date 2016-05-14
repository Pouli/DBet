class MessageService {
    /*@ngInject*/
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    showMessage(message) {
        this.$rootScope.$emit('EVENT-message', message);
    }
}

export default MessageService;
