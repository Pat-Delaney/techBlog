const { DATE } = require('sequelize');
const { Post } = require('../models');

const postData = [
  {
    title: 'Hello',
    poster_id: '1',
    post_date: 'Jan 1, 2023',
    desc:
      'Just saying Hi',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
