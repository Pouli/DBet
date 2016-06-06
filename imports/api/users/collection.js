Meteor.methods({
   updateProfilePicture(pictureInfo) {
       console.log(pictureInfo);
       return Meteor.users.update({ _id : Meteor.userId }, { $set: { 'profile.picture' : pictureInfo }});
   }
});