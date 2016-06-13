import template from './main.template.html';

class MainController {
    constructor($scope, $reactive, $timeout) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
           currentUser() {
               return Meteor.user();
           } 
        });
        
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
