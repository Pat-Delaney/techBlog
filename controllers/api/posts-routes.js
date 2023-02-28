const router = require('express').Router();
const { User, Post} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
      user_id: req.body.user_id,
    });

    req.session.save(() => {
      res.status(200).json(postData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
    try {
    const postData = await Post.update({
        title: req.body.title,
        desc: req.body.desc,
      },{
        where: {
        id: req.body.post_id
      }
    });
  
      req.session.save(() => {
        res.status(200).json(postData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;