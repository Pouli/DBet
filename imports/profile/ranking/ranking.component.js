class RankingController {
    /*@ngInject*/
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);

        this.subscribe('users');

        this.helpers({
            users() {
                return Meteor.users.find();
            }
        });
    }
}

const RankingComponent = {
    templateUrl: 'imports/profile/ranking/ranking.template.html',
    controller: RankingController,
    controllerAs: 'ctrl'
};

export default RankingComponent;
