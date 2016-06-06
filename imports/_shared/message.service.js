class MessageService {
    /*@ngInject*/
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }

    showMessage(message) {
        this.$rootScope.$emit('EVENT-message', message);
    }

    showMessageQuick(message) {
        this.$rootScope.$emit('EVENT-message-quick', message);
    }
}

export default MessageService;
