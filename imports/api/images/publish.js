import { Images, Thumbs } from './collection';

if (Meteor.isServer) {
    Meteor.publish('thumbs', function(id) {
        if(!this.userId) return null;

        return Thumbs.find({
            originalStore: 'images',
            originalId: id
        });
    });

    Meteor.publish('images', function(id) {
        if(!this.userId) return null;

        return Images.find({
            _id: id
        });
    });
}
