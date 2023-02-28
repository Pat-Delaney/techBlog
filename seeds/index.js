const sequelize = require('../config/connection');
const seedUsers = require('./Users');
const seedPosts = require('./Posts');
const seedComments = require('./Comments');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedUsers();
  await seedPosts();
  await seedComments();
  
  process.exit(0);
};

seedAll();
