Meteor.users.before.insert((userId, user) => {
    const defaultUrl = `/images/profile-${ Math.floor(Math.random() * 6) + 1 }.jpg`;

    user.profile.picture = { defaultUrl : defaultUrl };
    user.profile.score = [{ date : new Date(), value: 2 }];
});

Meteor.users.after.insert((userId, user) => Roles.addUsersToRoles(user._id, ['ROLE_PLAYER']));
