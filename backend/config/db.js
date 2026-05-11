const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mydb', 'postgres', '111006', {
host: 'localhost',
dialect: 'postgres',
})
module.exports = sequelize