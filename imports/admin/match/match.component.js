import './match.template.html';

import { Matchs } from '../../api/matchs';
import { Teams } from '../../api/teams';

class matchController {
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

        console.log(this.matchs);
    }
    
    removeMatch(id) {
        Matchs.remove(id, (err) => {
            if(err) return this.MessageService.showMessage(err.message);
        });
    }
}

const matchComponent = {
    templateUrl: 'imports/admin/match/match.template.html',
    controller: matchController,
    controllerAs: 'ctrl'
};

export default matchComponent;
