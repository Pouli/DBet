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
    templateUrl: 'imports/profile/main/main.template.html',
    controller: MainController,
    controllerAs: 'ctrl'
};

export default MainComponent;
