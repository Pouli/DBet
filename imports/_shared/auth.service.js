class AuthService {
    constructor($q) {
        'ngInject';
        
        this.$q = $q;
    }

    isLoggedIn() {
        if(Meteor.userId() === null) {
            return this.$q.reject('AUTH_REQUIRED');
        }
        return this.$q.resolve();
    }

    isRoleAuthorized(role) {
        if(!Roles.userIsInRole(Meteor.userId(), role)) {
            return this.$q.reject('NOT_AUTHORIZED');
        }
        return this.$q.resolve();
    }
}

export default AuthService;
