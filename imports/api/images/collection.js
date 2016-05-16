import { Mongo } from 'meteor/mongo';

export const Images = new Mongo.Collection('images');
export const Thumbs = new Mongo.Collection('thumbs');

function loggedIn(userId) {
  return !!userId;
}

Images.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});

Thumbs.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
