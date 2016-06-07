import './edition.template.html';

import { Matchs } from '../../../api/matchs';

class EditionController {
    /*@ngInject*/
    constructor($scope, $reactive, $state, $stateParams, MessageService) {
        $reactive(this).attach($scope);
        this.$state = $state;
        this.matchId = $stateParams.id;
        this.MessageService = MessageService;

        console.log(this.matchId);

        this.score = { homeTeam : '', awayTeam : '' };

        this.subscribe('matchs');

        this.helpers({
            match() {
                return Matchs.findOne({ _id: this.matchId });
            }
        });
    }

    saveScore(isValid) {
        if(!isValid) return;

        Match.update({_id: this.matchId}, {$set : this.score }, (err) => {
            if(err) return this.MessageService.showMessage(err.message);

            this.$state.go('admin.match');
        })
    }
}

const EditionComponent = {
    templateUrl: 'imports/admin/match/edition/edition.template.html',
    controller: EditionController,
    controllerAs: 'ctrl'
};

export default EditionComponent;
