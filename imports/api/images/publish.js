import { Images } from './collection';

if (Meteor.isServer) {
    Meteor.publish('image', function() {
        console.log(this.userId);
        if(!this.userId) return null;

        return Images.find();
    });
}
