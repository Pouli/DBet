import './creation.template.html';

import { Teams } from '../../../api/teams';

class CreationController {
    constructor($scope, $reactive, $state, MessageService) {
        'ngInject';
        
        $reactive(this).attach($scope);
        this.$state = $state;
        this.MessageService = MessageService;

        this.newTeam = {
            country: '',
            coach: '',
            captain: '',
            logo: {}
        }
    }

    saveTeam(isValid) {
        if(!isValid) return;

        Teams.insert(this.newTeam, (err) => {
            if(err) {
                this.newMatch = { country: '', coach: '', captain: '', logo: {} };
                return this.MessageService.showMessage(err.massage);
            }
            this.$state.go('admin.team');
        });
    }
}

const CreationComponent = {
    templateUrl: 'imports/admin/team/creation/edition.template.html',
    controller: CreationController,
    controllerAs: 'ctrl'
}

export default CreationComponent;
