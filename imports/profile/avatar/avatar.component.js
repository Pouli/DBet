import template from './avatar.template.html';

class AvatarController {
    constructor($scope, $reactive, $timeout) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.helpers({
            currentUser() {
                return Meteor.user();
            },
            users() {
                return Meteor.users.find({}, { sort: { 'profile.score.0.value' : -1 }});
            }
        });

        $timeout(() => $('.modal-trigger').leanModal());
    }

    updateProfilePicture() {
        Meteor.call('updateProfilePicture', this.currentUser.profile.picture);
    }

    getRank() {
        if(!this.currentUser) return;

        return this.users.map(item => item._id).indexOf(this.currentUser._id) + 1;
    }
}

const AvatarComponent = {
    templateUrl: template,
    controller: AvatarController,
    controllerAs: 'ctrl'
};

export default AvatarComponent;
