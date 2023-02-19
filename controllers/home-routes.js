const router = require('express').Router();
const { Posts, Users } = require('../models');
const withAuth = require('../utils/auth');
// GET home
router.get('/', async (req, res) => {
  try {
    const dbPosts = await Posts.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const posts = dbPosts.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user

router.get('/user/:id', withAuth, async (req, res) => {

    try {
      const dbUserData = await Users.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'username',
          
            ],
          },
        ],
      });
      const User = dbUserData.get({ plain: true });
      res.render('user', { User, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// GET one post

router.get('/post/:id',withAuth, async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {

    try {
      const postData = await Post.findByPk(req.params.id);

      const post = postData.get({ plain: true });

      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
