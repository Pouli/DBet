import { Accounts } from 'meteor/accounts-base';

import './signup.template.html';

class SignupController {
    /*@ngInject*/
    constructor($scope, $reactive, $state) {
        this.$state = $state;
        $reactive(this).attach($scope);

        this.credentials = {
            email: '',
            password: ''
        };

        this.error = '';
    }

    register() {
        Accounts.createUser(this.credentials,
            this.$bindToContext((err) => {
                if (err) {
                    this.error = err;
                } else {
                    this.$state.go('match');
                }
            })
        );
    }
}

const SignupComponent = {
    templateUrl: 'imports/auth/signup/signup.template.html',
    controller: SignupController,
    controllerAs: 'ctrl'
}

export default SignupComponent;
