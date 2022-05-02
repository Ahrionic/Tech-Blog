const router = require('express').Router()
const { Post, User, Comment } = require('../models')
const passport = require('passport')

//GET ALL POSTS
router.get('/posts', async(req,res)=> {
  try {
    let posts = await Post.findAll({include:[User]})
    res.json(posts)
  } catch (error) {
    res.json({error})
  }
})

//GET ONE POST BY ID
router.get('/posts/:id', passport.authenticate('jwt'), async (req, res) => {
  try {
    let post = await Post.findOne({where:{id: req.params.id}, include: [User,Comment] })
    res.json(post)
  } catch (error) {
    res.json({ error })
  }
})


//DELETE A POST
router.delete('/posts/:id', passport.authenticate('jwt'), async (req, res) => {
  try {
    let post = await Post.destroy({ where: { id: req.params.id }})
    res.json({message: 'post deleted'})
  } catch (error) {
    res.json({ error })
  }
})



//CREATE A POST
router.post('/posts', passport.authenticate('jwt'), async (req, res) => {
  try {
    const newPost = await Post.create(
      {
        ...req.body, 
        userId: req.user.id
      });
    res.json(newPost);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;
