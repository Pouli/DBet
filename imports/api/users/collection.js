Meteor.methods({
    updateProfilePicture(pictureInfo) {
       console.log(pictureInfo);
       return Meteor.users.update({ _id : Meteor.userId }, { $set: { 'profile.picture' : pictureInfo }});
    },
    updateUsersScore(matchId, score) {
        Meteor.call('getBets', matchId, (err, res) => {
            res.forEach((bet) => {
                if(defineWinnerOrDraw(score) === bet.value) {
                    const currentUser = Meteor.users.find({ _id : bet.userId }).fetch();
                    const currentScore = currentUser[0].profile.score.pop();

                    Meteor.users.update({ _id : bet.userId }, { $push : { 'profile.score' : { date: new Date(), value: currentScore.value + 1 }}});
                }
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