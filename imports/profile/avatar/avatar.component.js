class AvatarController {
    /*@ngInject*/
    constructor($scope, $reactive, $timeout) {
        $reactive(this).attach($scope);

        this.helpers({
            currentUser() {
                return Meteor.user();
            }
        });

        $timeout(() => $('.modal-trigger').leanModal());
    }

    updateProfilePicture() {
        Meteor.call('updateProfilePicture', this.currentUser.profile.picture);
    }
}

const AvatarComponent = {
    templateUrl: 'imports/profile/avatar/avatar.template.html',
    controller: AvatarController,
    controllerAs: 'ctrl'
};

export default AvatarComponent;
