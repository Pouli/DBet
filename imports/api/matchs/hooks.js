import { Matchs } from './collection';
import { Teams } from '../teams';

if(Meteor.isServer) {
    Matchs.before.insert((userId, doc) => {
        const homeTeam = Teams.findOne({ _id: doc.homeTeam });
        doc.homeTeam = homeTeam;

        const awayTeam = Teams.findOne({ _id: doc.awayTeam });
        doc.awayTeam = awayTeam;

        const splitTime = doc.time.split(':');
        doc.date.setHours(splitTime[0]);
        doc.date.setMinutes(splitTime[1]);

        delete doc.time;
    });
}