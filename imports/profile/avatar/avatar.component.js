class AvatarController {
    /*@ngInject*/
    constructor($scope, $reactive, $timeout) {
        $reactive(this).attach($scope);

        this.subscribe('userData');

        this.helpers({
            userData() {
                return Meteor.users.find();
            }
        });

        $timeout(() => $('.modal-trigger').leanModal());
    }

    updateProfilePicture() {
        Meteor.call('updateProfilePicture', this.userData[0].profile.picture);
    }

    randomInt() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

const AvatarComponent = {
    templateUrl: 'imports/profile/avatar/avatar.template.html',
    controller: AvatarController,
    controllerAs: 'ctrl'
};

export default AvatarComponent;
