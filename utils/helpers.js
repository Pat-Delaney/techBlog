module.exports = {
  checkUser: (post_user) =>{
    return post_user === req.session.current_user;
  }
};
