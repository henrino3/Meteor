Meteor.publish('posts', function(){
    return Posts.find();
})

// return Posts.find({}, {fields: {url: false);
