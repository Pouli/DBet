import './main.template.html';

class mainController {
    /*@ngInject*/
    constructor($timeout) {
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
