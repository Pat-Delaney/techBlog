const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;
