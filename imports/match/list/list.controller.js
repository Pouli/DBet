import { Meteor } from 'meteor/meteor';

import { Matchs } from '../../api/matchs';

class MatchListController {
    /*@ngInject*/
    constructor($scope) {
        $scope.viewModel(this);

        this.subscribe('matchs');

        this.helpers({
            matchs: () => Matchs.find({}),
        })
    }

    addMatch() {
        Matchs.insert({
            homeTeam: this.newMatch.homeTeam,
            awayTeam: this.newMatch.awayTeam,
            owner: Meteor.user()._id,
            createdAt: new Date
        });

        this.newMatch = { homeTeam: '', awayTeam: ''};
    }

    updateMatch() {

    }

    removeMatch(id) {
        Matchs.remove(id);
    }
}

export default MatchListController;
