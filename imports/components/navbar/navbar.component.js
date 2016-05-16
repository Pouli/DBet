import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './navbar.template.html';

const name = 'auth';

class NavbarController {
    /*@ngInject*/
    constructor($scope, $reactive, $state, $timeout) {
        this.$state = $state;
        this.$timeout = $timeout;

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

function initSideNav($timeout) {
    $timeout(() => $('.button-collapse').sideNav({closeOnClick: true}));
}

const NavbarComponent = {
    templateUrl: 'imports/components/navbar/navbar.template.html',
    controller: NavbarController,
    controllerAs: 'ctrl'
};

export default NavbarComponent;
