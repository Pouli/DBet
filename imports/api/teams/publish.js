import { Teams } from './collection';

if (Meteor.isServer) {
    Meteor.publish('teams', function() {
        if(!this.userId) return null;

        return Teams.find();
    });
}
