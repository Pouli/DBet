import template from './login.template.html';

class LoginController {
    constructor($scope, $reactive, $state, MessageService) {
        'ngInject';

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
                    this.$state.go('bet');
                }
            })
        );
    }
}

const LoginComponent = {
    templateUrl: template,
    controller: LoginController,
    controllerAs: 'ctrl'
};

export default LoginComponent;
