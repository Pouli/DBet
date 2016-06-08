import './edition.template.html';

import { Matchs } from '../../../api/matchs';

class EditionController {
    /*@ngInject*/
    constructor($scope, $reactive, $state, $stateParams, MessageService) {
        $reactive(this).attach($scope);
        this.$state = $state;
        this.matchId = $stateParams.id;
        this.MessageService = MessageService;

        this.score = { homeTeam : '', awayTeam : '' };

        this.subscribe('matchs');

        this.helpers({
            match() {
                return Matchs.findOne({ _id: this.matchId });
            }
        });
    }
    
    updateMatch(isValid) {
        if(!isValid) return;
        
        Meteor.call('saveScore', this.matchId, this.score, (err, res) => {
            if(err) return this.MessageService.showMessage(err.message);
            if(!res) return this.MessageService.showMessage('Ce match n\'a pas encore été joué');

            Meteor.call('updateUsersScore', this.matchId, this.score);
            return this.$state.go('admin.match');
        });
    }
}

const EditionComponent = {
    templateUrl: 'imports/admin/match/edition/edition.template.html',
    controller: EditionController,
    controllerAs: 'ctrl'
};

export default EditionComponent;
