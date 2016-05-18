import { Teams } from './collection';

if (Meteor.isServer) {
    Teams.before.insert(function(userId, doc){
        doc.createdAt = new Date();
    });
}
