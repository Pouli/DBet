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
