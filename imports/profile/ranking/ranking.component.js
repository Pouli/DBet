import template from './ranking.template.html';

class RankingController {
    constructor($scope, $reactive) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.subscribe('users');

        this.helpers({
            users() {
                return Meteor.users.find({}, { sort: { 'profile.score.0.value' : -1 }});
            }
        });
    }
}

const RankingComponent = {
    templateUrl: template,
    controller: RankingController,
    controllerAs: 'ctrl'
};

export default RankingComponent;
