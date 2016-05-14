import { Meteor } from 'meteor/meteor';

import './login.template.html';

class LoginController {
    /*@ngInject*/
    constructor($scope, $reactive, $state, MessageService) {
        this.$state = $state;
        this.MessageService = MessageService;

        $reactive(this).attach($scope);

        this.credentials = {
            email: '',
            password: ''
        };

    }

    login() {
        Meteor.loginWithPassword(this.credentials.email, this.credentials.password,
            this.$bindToContext((err) => {
                if (err) {
                    this.MessageService.showMessage(err.message);
                } else {
                    this.$state.go('match');
                }
            })
        );
    }
}

const LoginComponent = {
    templateUrl: 'imports/auth/login/login.template.html',
    controller: LoginController,
    controllerAs: 'ctrl'
};

export default LoginComponent;
