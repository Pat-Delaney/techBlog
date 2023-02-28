const router = require('express').Router();
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll( {
      attributes: { exclude: ['password'] },
    });

    const user = userData.map((user) =>
    user.get({ plain: true })
  );

    res.render('user', {
      user,
      loggedIn: req.session.loggedIn,
      current_user: req.session.current_user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: {
         exclude: 'password',
      },
    });
    const user = userData.get({ plain: true });
    res.render('single_user', {
       user,
        loggedIn: req.session.loggedIn,
        current_user: req.session.current_user,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

router.get('/:id/posts', withAuth, async (req, res) => {

  try {
    const postData = await Post.findAll({
      where:{user_id:req.params.id},
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
    const posts = postData.map((post) =>
    post.get({ plain: true })
  );

    res.render('post', { ...posts, loggedIn: req.session.loggedIn, current_user: req.session.current_user, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

module.exports = router;
