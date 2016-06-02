import { Mongo } from 'meteor/mongo';

export const Matchs = new Mongo.Collection('matchs');

Matchs.allow({
  insert(userId) {
    return userId && Roles.userIsInRole(userId, 'ROLE_ADMIN');
  },
  remove(userId) {
    return userId && Roles.userIsInRole(userId, 'ROLE_ADMIN');
  },
  update(userId) {
    return userId && Roles.userIsInRole(userId, 'ROLE_ADMIN');
  }
});
