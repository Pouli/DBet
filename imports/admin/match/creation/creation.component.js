import './creation.template.html';

import { Teams } from '../../../api/teams';
import { Matchs } from '../../../api/matchs';

class CreationController {
    /*@ngInject*/
    constructor($scope, $reactive, $timeout, $state, GROUPS, MessageService) {
        $reactive(this).attach($scope);

        this.$state = $state;
        this.groups = GROUPS;
        this.MessageService = MessageService;

        this.newMatch = { homeTeam: '', awayTeam: '', group: '', stadium: '', date: '', time: '' };

        this.subscribe('teams');

        this.helpers({
            teams() {
                return Teams.find();
            }
        });

        initSelect($timeout);
        initDatePicker($timeout);
        initTimePicker($timeout);
    }

    saveMatch(isValid) {
        if(!isValid) return;
        console.log(this.newMatch);
        Matchs.insert(this.newMatch, (err) => {
            if(err) {
                this.newMatch = { homeTeam: '', awayTeam: '', stadium: '', date: '', time: '' };
                return this.MessageService.showMessage(err.message);
            }
            this.$state.go('admin.match');
        });
    }
}

function initSelect($timeout) {
    $timeout(() => $('select').material_select());
}

function initDatePicker($timeout) {
    $timeout(() => $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'yyyy-mm-dd',
        onSet: function () {
            this.close();
        }
    }));
}

function initTimePicker($timeout) {
    $timeout(() => $('.timepicker').clockpicker({ autoclose: true, twelvehour: false, fromnow: 'now' }));
}

const CreationComponent = {
    templateUrl: 'imports/admin/match/creation/creation.template.html',
    controller: CreationController,
    controllerAs: 'ctrl'
};

export default CreationComponent;
