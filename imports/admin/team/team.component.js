import './team.template.html';

import { Teams } from '../../api/teams';
import { Images } from '../../api/images';

class TeamController {
    constructor($scope, $reactive, MessageService) {
        'ngInject';
        
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
        const team = Teams.findOne({ _id: id });

        if(team && team.logo.id) {
            Images.remove(team.logo.id, (err) => {
                if(err) this.MessageService.showMessage(err.message);
            })
        }

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
