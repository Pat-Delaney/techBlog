const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username','id',],
        },
        {
          model: Comment,
          attributes: ['desc','user_id'],
        },
      ],
    });

    const posts = dbPosts.map((post) =>
      post.get({ plain: true })
    );

    res.render('post', {
      posts,
      loggedIn: req.session.loggedIn,
      current_user: req.session.current_user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET one post

router.get('/:id',withAuth, async (req, res) => {

      try {
        const postData = await Post.findByPk(req.params.id,{
          include: [
            {
              model: User,
              attributes: ['username','id',],
            },
            {
              model: Comment,
              attributes: ['desc','user_id'],
            },
          ],
        });
        const posts = postData.get({ plain: true });
  
  
        res.render('single_post', { ...posts, loggedIn: req.session.loggedIn, current_user: req.session.current_user, });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });

module.exports = router;
