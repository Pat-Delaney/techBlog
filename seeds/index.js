const sequelize = require('../config/connection');
const seedPosts = require('./Posts');
const seedUsers = require('./Posts');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedUsers();

  process.exit(0);
};

seedAll();
