import { Mongo } from 'meteor/mongo';

export const Bets = new Mongo.Collection('bets');

Bets.allow({
    insert(userId) {
        return !!userId;
    },
    remove(userId) {
        return !!userId;
    },
    update(userId) {
        return !!userId;
    }
});

Meteor.methods({
    saveBet (matchId, value) {
        Meteor.call('checkDate', matchId, (err, res) => {
            if(err) return err;
            if(!res) return false;
            
            return Bets.upsert({ userId: Meteor.userId(), matchId: matchId }, { userId: Meteor.userId(), matchId: matchId, value : value });
        });
    },
    getBets(matchId) {
        return Bets.find({ matchId : matchId });
    },
    cancelBet(matchId) {
        return Bets.remove({ userId: Meteor.userId(), matchId: matchId });
    }
});
