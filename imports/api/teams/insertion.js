import { Teams } from './collection';
import { Matchs } from '../matchs';

if (Meteor.isServer) {
    Teams.after.update((userId, doc, fieldNames, modifier) => {

        const homeTeamModified = Matchs.find({ 'homeTeam._id' : doc._id });


        /*console.log(doc);
        console.log(fieldNames);
        console.log(modifier.$set);*/
    });

    /*Teams.before.insert(function(userId, doc){
        doc.createdAt = new Date();
    });*/
}
