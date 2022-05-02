const { Post } = require('../models')

const postData = [
  {
    title: 'Sample post',
    body: `hello this is a sample`
  },
  {
    title: 'Sample post 2',
    body: `this is a sample 2 woo`
  }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts