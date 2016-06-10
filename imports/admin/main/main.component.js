import './main.template.html';

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
    templateUrl: 'imports/admin/main/main.template.html',
    controller: mainController,
    controllerAs: 'ctrl'
}

export default mainComponent;
