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
                return Matchs.find({'date' : { $gte : new Date()}});
            },
            bets() {
                return Bets.find();
            }
        });

        $timeout(() => $('.collapsible').collapsible());
    }

    saveBet(matchId, value) {
        Meteor.call('saveBet', matchId, value, (err) => {
            if(err) return this.MessageService.showMessageQuick(err.message);

            return this.MessageService.showMessageQuick('Sauvegarder');
        });
    }

    isSelected(matchId, value) {
        const bet = this.bets.filter((item) => item.matchId === matchId);

        if(!bet.length) return false;
        
        return bet[0].value === value;
    }

    getDistinctGroups() {
        let filter = this.matchs.map((item) => item.group);

        return _.chain(filter).uniq().value();
    }

    cancelBet(matchId) {
        Meteor.call('cancelBet', matchId, (err, res) => {
            if(err) return this.MessageService.showMessageQuick(err.message);
            if(!res) return this.MessageService.showMessageQuick('Aucun pari à réinitialiser');

            return this.MessageService.showMessageQuick('Réinitialisé');
        });
    }
}

const mainComponent = {
    templateUrl: template,
    controller: MainController,
    controllerAs: 'ctrl'
};

export default mainComponent;
