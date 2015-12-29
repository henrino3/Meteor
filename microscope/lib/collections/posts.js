Posts = new Mongo.Collection('posts');

getPosts = function(){
  return Posts.find().fetch();
};
