import { Teams } from '../../../api/teams.js';

class CreationController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newTeam = {
            country: '',
            coach: '',
            captain: '',
            logo: ''
        }
    }

    saveTeam() {
        Teams.insert({
            country: this.newTeam.country,
            coach: this.newTeam.coach,
            captain: this.newTeam.captain,
            logo: this.newTeam.logo,
            createdAt: new Date
        });

        this.newMatch = { country: '', coach: '', captain: '', logo: '' };
    }
}

const CreationComponent = {
    templateUrl: 'imports/admin/team/creation/creation.template.html',
    controller: CreationController,
    controllerAs: 'ctrl'
}

export default CreationComponent;
