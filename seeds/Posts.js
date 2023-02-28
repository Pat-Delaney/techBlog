const { DATE } = require('sequelize');
const { Post } = require('../models');

const postData = [
  {
    title: 'Hello',
    post_date: '2014-09-06 00:43:33',
    desc: 'Just saying Hi',
    user_id: 1,
  },
  {
    title: 'Hello Again',
    post_date: '2014-08-05 00:43:33',
    desc: 'Just saying Hi again',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
