Meteor.users.after.insert((userId, user) => Roles.addUsersToRoles(user._id, ['ROLE_PLAYER']));
