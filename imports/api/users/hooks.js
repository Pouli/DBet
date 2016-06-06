Meteor.users.before.insert((userId, user) => user.profile.picture = {});

Meteor.users.after.insert((userId, user) => Roles.addUsersToRoles(user._id, ['ROLE_PLAYER']));
