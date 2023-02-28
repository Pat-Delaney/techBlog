const { User } = require('../models');

const user = [
  {
    username: 'John',
    email:'John@john.com',
    password: '$2b$10$msBcxGKXu6q5NYmAjzI/keZ4so3J.Wq.VmP1x3DfAiPKnsgK2ma4i',
    date_joined: '2013-09-06 00:43:33',
  },
  {
    username: 'Jim',
    email:'Jim@jim.com',
    password: '$2b$10$msBcxGKXu6q5NYmAjzI/keZ4so3J.Wq.VmP1x3DfAiPKnsgK2ma4i',
    date_joined: '2013-09-06 00:43:33',
  },
];

const seedUsers = () => User.bulkCreate(user);

module.exports = seedUsers;
