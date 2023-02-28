const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
// GET home
router.get('/', async (req, res) => {
  try {
    const dbPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
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

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res)=>{
  try {
    const userData = await User.findByPk(req.session.current_user, {
      attributes: {
         exclude: 'password',
      },
    });
    const user = userData.get({ plain: true });

  const dbPosts = await Post.findAll({
    where: {
      user_id: req.session.current_user
    },
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });
  const posts = dbPosts.map((post) =>
    post.get({ plain: true })
  );
  res.render('dashboard', {
    posts,
    user,
    loggedIn: req.session.loggedIn,
  });
}
catch (err) {
  console.log(err);
  res.status(500).json(err);
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
