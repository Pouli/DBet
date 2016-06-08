Meteor.users.before.insert((userId, user) => {
    user.profile.picture = {};
    user.profile.score = [{ date : new Date(), value: 0 }];
});

Meteor.users.after.insert((userId, user) => Roles.addUsersToRoles(user._id, ['ROLE_PLAYER']));
