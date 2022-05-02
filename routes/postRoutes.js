const router = require('express').Router()
const { Post, User } = require('../models')


router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll()
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id)

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' })
      return
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/posts', async (req, res) => {
  try {
    const postData = await Post.create(req.body)
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!postData) {
      res.status(404).json({ message: 'No Post found with this id!' })
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router