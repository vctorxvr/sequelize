const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', '123456',  {

dialect: 'postgres',
host: 'localhost',
port: 5432
    
})

module.exports = sequelize;