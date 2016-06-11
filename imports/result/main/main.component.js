import template from './main.template.html';

import { Matchs } from '../../api/matchs';
import { Bets } from '../../api/bets';

class MainController {
    constructor($scope, $reactive, MessageService, $timeout) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.MessageService = MessageService;

        this.subscribe('matchs', () => [], {
            onReady: function () {
                $('.collapsible').collapsible();
            }
        });

        this.subscribe('bets');

        this.helpers({
            matchs() {
                return Matchs.find({'date' : { $lt : new Date()}});
            },
            bets() {
                return Bets.find();
            }
        });

        $timeout(() => $('.collapsible').collapsible());
    }

    isSelected(matchId, value) {
        const bet = this.bets.filter((item) => item.matchId === matchId);

        if(!bet.length) return false;

        return bet[0].value === value;
    }

    isBetGood(matchId, value) {
        const match = this.matchs.filter((item) => item._id === matchId);

        return defineWinnerOrDraw(match[0].score) === value;
    }

    getDistinctGroups() {
        let filter = this.matchs.filter((item) => !!item.group);
        
        return _.chain(filter).uniq('group').pluck('group').value();
    }
}

const mainComponent = {
    templateUrl: template,
    controller: MainController,
    controllerAs: 'ctrl'
};

export default mainComponent;

function defineWinnerOrDraw(score) {
    const difference = score.homeTeam - score.awayTeam;
    if( difference > 0) {
        return '1';
    }
    else if (difference === 0) {
        return 'N';
    }
    else {
        return '2';
    }
}