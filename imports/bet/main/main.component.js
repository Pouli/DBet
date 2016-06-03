import './main.template.html';

import { Matchs } from '../../api/matchs';

class MainController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('matchs', () => [], {
            onReady: function () {
                $('.collapsible').collapsible();
            }
        });

        this.helpers({
            matchs() {
                return Matchs.find();
            }
        });
    }
}

const mainComponent = {
    templateUrl: 'imports/bet/main/main.template.html',
    controller: MainController,
    controllerAs: 'ctrl'
};

export default mainComponent;
