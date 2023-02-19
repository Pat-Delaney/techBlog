const { User } = require('../models');

const user = [
  {
    username: 'John',
    email:'John@john.com',
    password: 'john'
  },
];

const seedUsers = () => User.bulkCreate(user);

module.exports = seedUsers;
