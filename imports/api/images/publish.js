import { Images } from './collection';

if (Meteor.isServer) {
    Meteor.publish('image', function() {
        if(!this.userId) return null;

        return Images.find();
    });
}
