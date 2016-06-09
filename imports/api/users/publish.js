Meteor.publish('users', function() {
    return Meteor.users.find({}, { fields : {'services' : 0, 'resume' : 0 }});
});

Meteor.publish('userData', function() {
    return Meteor.users.find({ _id : this.userId }, { fields : {'services' : 0, 'resume' : 0 }});
});