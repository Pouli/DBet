import './main.template.html';

import { Matchs } from '../../api/matchs';
import { Bets } from '../../api/bets';

class MainController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('matchs', () => [], {
            onReady: function () {
                $('.collapsible').collapsible();
            }
        });

        this.subscribe('bets', () => [ Meteor.userId() ]);

        this.helpers({
            matchs() {
                return Matchs.find();
            },
            bets() {
                return Bets.find({ userId: Meteor.userId() });
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
