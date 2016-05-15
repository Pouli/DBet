class AvatarController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
            currentUser() {
                return Meteor.user();
            }
        });
    }

}

const AvatarComponent = {
    templateUrl: 'imports/profile/avatar/avatar.template.html',
    controller: AvatarController,
    controllerAs: 'ctrl'
}

export default AvatarComponent;
