import template from './main.template.html';

class mainController {
    constructor($timeout) {
        'ngInject';
        
        initTab($timeout)
    }
}

function initTab($timeout) {
    $timeout(() => $('ul.tabs').tabs());
}

const mainComponent = {
    templateUrl: template,
    controller: mainController,
    controllerAs: 'ctrl'
}

export default mainComponent;
