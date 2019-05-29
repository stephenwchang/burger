const Sequelize = require('sequelize');



const sequelize = new Sequelize('heroku_7cdff1edc84e8fd', 'b00b858caa3026', 'c63bacb4', {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
