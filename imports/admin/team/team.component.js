import './team.template.html';

import { Teams } from '../../api/teams';

class TeamController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('teams');

        this.helpers({
            teams() {
                return Teams.find();
            }
        });
    }

    removeTeam(id) {
        Teams.remove(id, (err) => {
            if(err) console.log(err);
        });
    }
}

const TeamComponent = {
    templateUrl: 'imports/admin/team/team.template.html',
    controller: TeamController,
    controllerAs: 'ctrl'
}

export default TeamComponent;
