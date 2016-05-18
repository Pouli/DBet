import './team.template.html';

import { Teams } from '../../api/teams';

class TeamController {
    /*@ngInject*/
    constructor($scope, $reactive, MessageService) {
        $reactive(this).attach($scope);
        this.MessageService = MessageService;

        this.subscribe('teams');

        this.helpers({
            teams() {
                return Teams.find();
            }
        });
    }

    removeTeam(id) {
        Teams.remove(id, (err) => {
            if(err) return this.MessageService.showMessage(err.message);
        });
    }
}

const TeamComponent = {
    templateUrl: 'imports/admin/team/team.template.html',
    controller: TeamController,
    controllerAs: 'ctrl'
}

export default TeamComponent;
