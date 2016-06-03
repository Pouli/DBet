import { Bets } from './collection';

if (Meteor.isServer) {
    Meteor.publish('bets', function(id) {
        console.log(id);
        console.log(this.userId);

        if(!this.userId) return null;
        
        return Bets.find({ userId : id });
    });
}
