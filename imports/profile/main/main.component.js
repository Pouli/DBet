import template from './main.template.html';

class MainController {
    constructor($timeout) {
        'ngInject';
        
        initCollapsible($timeout);
    }
}

function initCollapsible($timeout) {
    $timeout(() => $('.collapsible').collapsible({accordion : false}));
}

const MainComponent = {
    templateUrl: template,
    controller: MainController,
    controllerAs: 'ctrl'
};

export default MainComponent;
