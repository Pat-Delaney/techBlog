const { DATE } = require('sequelize');
const { Comment } = require('../models');

const commentData = [
  {
    comment_date: '2014-09-06 02:43:33',
    desc: 'Saying Hi back',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_date: '2014-09-06 03:43:33',
    desc: 'What up',
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
