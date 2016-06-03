import { Teams } from './collection';
import { Matchs } from '../matchs';

if (Meteor.isServer) {
    Teams.after.update((userId, doc, fieldNames, modifier) => {
        const homeTeamModified = Matchs.find({ 'homeTeam._id' : doc._id });
        homeTeamModified.forEach((item) => {
            modifier.$set[`homeTeam.${fieldNames[0]}`] = modifier.$set[fieldNames[0]];
            delete modifier.$set[fieldNames[0]];

            Matchs.update({_id: item._id}, modifier);
        });

        const awayTeamModified = Matchs.find({ 'awayTeam._id' : doc._id });
        awayTeamModified.forEach((item) => {
            modifier.$set[`awayTeam.${fieldNames[0]}`] = modifier.$set[fieldNames[0]];
            delete modifier.$set[fieldNames[0]];

            Matchs.update({_id: item._id}, modifier);
        })
    });
}
