const User = require('./User.js')
const Post = require('./Post.js')
// your relationships go here...

User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Post}


