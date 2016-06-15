Meteor.methods({
    updateProfilePicture(pictureInfo) {
        return Meteor.users.update({ _id : Meteor.userId() }, { $set: { 'profile.picture' : pictureInfo }});
    },
    updateUsersScore(matchId, score) {
        Meteor.call('getBets', matchId, (err, res) => {
            res.forEach((bet) => {
                const currentUser = Meteor.users.find({ _id : bet.userId }).fetch();
                const currentScore = currentUser[0].profile.score[0];

                const newScore = defineWinnerOrDraw(score) === bet.value ? currentScore.value + 3 : currentScore.value - 1;

                Meteor.users.update({ _id : bet.userId }, { $push : { 'profile.score' : { $each: [{ date: new Date(), value: newScore }], $position: 0 }}});
            })
        });
    }
});

function defineWinnerOrDraw(score) {
    const difference = score.homeTeam - score.awayTeam;
    if( difference > 0) {
        return '1';
    }
    else if (difference === 0) {
        return 'N';
    }
    else {
        return '2';
    }
}