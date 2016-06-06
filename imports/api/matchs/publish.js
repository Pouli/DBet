import { Matchs } from './collection';

if (Meteor.isServer) {
    Meteor.publish('matchs', function() {
        if(!this.userId) return null;

        return Matchs.find();
    });
}
