import './match.template.html';

import { Matchs } from '../../api/matchs';
import { Teams } from '../../api/teams';

class MatchController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('matchs');
        this.subscribe('teams');

        this.helpers({
            matchs() {
                return Matchs.find();
            },
            teams() {
                return Teams.find();
            }
        });
    }
    
    removeMatch(id) {
        Matchs.remove(id, (err) => {
            if(err) return this.MessageService.showMessage(err.message);
        });
    }
}

const matchComponent = {
    templateUrl: 'imports/admin/match/match.template.html',
    controller: MatchController,
    controllerAs: 'ctrl'
};

export default matchComponent;
