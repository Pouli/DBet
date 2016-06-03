import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './navbar.template.html';

class NavbarController {
    /*@ngInject*/
    constructor($scope, $reactive, $state) {
        this.$state = $state;

        $reactive(this).attach($scope);

        this.helpers({
            isLoggedIn() {
                return !!Meteor.userId();
            },
            currentUser() {
                return Meteor.user();
            },
            isAdmin() {
                return Roles.userIsInRole(Meteor.userId(), 'ROLE_ADMIN');
            }
        });

        initSideNav($timeout);
    }

    logout() {
        Accounts.logout((err) => {
            if(err) console.log(err);
            this.$state.go('login');
        });
    }

    close() {
        $('.button-collapse').sideNav('hide');
    }
}

const NavbarComponent = {
    templateUrl: 'imports/components/navbar/navbar.template.html',
    controller: NavbarController,
    controllerAs: 'ctrl'
};

export default NavbarComponent;


function initSideNav($timeout) {
    $timeout(() => $('.button-collapse').sideNav({closeOnClick: true}));
}
