const sequelize = require('../config/config')
const { DataTypes } = require('sequelize')

const pls = require('passport-local-sequelize')

const User = pls.defineUser(sequelize, {
  
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
})



module.exports = User