const router = require('express').Router()
const { Post, User, Comment } = require('../models')
const passport = require('passport')

//GET ALL COMMENTS
router.get('/comments', passport.authenticate('jwt'), async (req, res) => {
  try {
    let comments = await Comment.findAll({ include: [Post] })
    res.json(comments)
  } catch (error) {
    res.json({ error })
  }
})

//CREATE A COMMENT
router.post('/comments', passport.authenticate('jwt'), async (req, res) => {
  try {
    const newComment = await Comment.create(req.body)
    res.json(newComment);
  } catch (err) {
    res.json(err);
  }
});



module.exports = router;
