const User = require('./User');
const Post = require('./Post');


User.hasMany(Post, {
  foreignKey: 'poster',
});

Post.belongsTo(User, {
  foreignKey: 'poster',
});

module.exports = { User, Post,};
