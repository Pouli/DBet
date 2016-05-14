import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './navbar.template.html';

const name = 'auth';

class NavbarController {
    /*@ngInject*/
    constructor($scope, $reactive, $state, $timeout) {
        this.$state = $state;
        $reactive(this).attach($scope);

        this.helpers({
            isLoggedIn() {
                $timeout(function() {
                    $('.dropdown-button').dropdown();
                });
                return !!Meteor.userId();
            },
            currentUser() {
                return Meteor.user();
            }
        });
    }

    logout() {
        Accounts.logout((err) => {
            if(err) console.log(err);
            this.$state.go('login');
        });
    }
}

const NavbarComponent = {
    templateUrl: 'imports/navbar/navbar.template.html',
    controller: NavbarController,
    controllerAs: 'ctrl'
};

export default NavbarComponent;
