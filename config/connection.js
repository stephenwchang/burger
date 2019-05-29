const Sequelize = require('sequelize');

const sequelize = new Sequelize('heroku_304415b83a57f98', 'bd4584b97bad4f', '8f7d7963', {
  host: 'localhostus-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
