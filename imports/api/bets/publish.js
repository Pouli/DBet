import { Bets } from './collection';

if (Meteor.isServer) {
    Meteor.publish('bets', function() {
        if(!this.userId) return null;
        
        return Bets.find({ userId : this.userId });
    });
}
