import { Accounts } from 'meteor/accounts-base';

import './signup.template.html';

class SignupController {
    constructor($scope, $timeout, $reactive, $state, MessageService, DEPARTMENTS) {
        'ngInject';
        
        this.$state = $state;
        this.MessageService = MessageService;
        this.departments = DEPARTMENTS;

        $reactive(this).attach($scope);

        this.credentials = {
            email: '',
            password: '',
            profile: {
                department: ''
            }
        };

        initSelect($timeout)
    }

    register(isValid) {
        if(!isValid) return;

        Accounts.createUser(this.credentials,
            this.$bindToContext((err) => {
                if (err) {
                    this.MessageService.showMessage(err.message);
                } else {
                    this.$state.go('bet');
                }
            })
        );
    }
}

function initSelect($timeout) {
    $timeout(() => $('select').material_select());
}

const SignupComponent = {
    templateUrl: 'imports/auth/signup/signup.template.html',
    controller: SignupController,
    controllerAs: 'ctrl'
};

export default SignupComponent;
