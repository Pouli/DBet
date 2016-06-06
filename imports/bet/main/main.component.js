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

        this.subscribe('bets');

        this.helpers({
            matchs() {
                return Matchs.find();
            },
            bets() {
                return Bets.find();
            }
        });
    }

    saveBet(matchId, value) {
        Meteor.call('saveBet', matchId, value);
    }

    isSelected(matchId, value) {
        const bet = this.bets.filter((item) => item.matchId === matchId);

        if(!bet.length) return false;
        
        return bet[0].value === value;
    }

    getDistinctGroups() {
        let filter = this.matchs.filter((item) => !!item.group);
        return _.chain(filter).uniq('group').pluck('group').value();
    }
}

const mainComponent = {
    templateUrl: 'imports/bet/main/main.template.html',
    controller: MainController,
    controllerAs: 'ctrl'
};

export default mainComponent;
