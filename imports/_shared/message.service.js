class MessageService {
    constructor($rootScope) {
        'ngInject';

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
