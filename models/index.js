const router = require('express').Router()


const Post = require('./Post')
const Comment = require('./Comment')
const User = require('./User')


User.hasMany(Post, {
  foreignKey:'userId'
})

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})



Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})
Comment.belongsTo(Post, {
  foreignKey: 'postId'
})


module.exports = {Post, Comment, User}