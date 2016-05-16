import { Mongo } from 'meteor/mongo';

export const Matchs = new Mongo.Collection('matchs');

Matchs.allow({
  insert(userId, match) {
    return userId && match.owner === userId;
  },
  remove(userId, match) {
    return userId && match.owner === userId;
  }
});
