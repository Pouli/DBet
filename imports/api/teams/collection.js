import {Mongo} from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

Teams.allow({
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
