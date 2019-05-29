const Sequelize = require('sequelize');

  // the application is executed on Heroku ... use the postgres database
const sequelize = new Sequelize({
    connectionString: process.env.DATABASE.URL,
    ssl: true,
  });

  sequelize.connect();

// const sequelize = new Sequelize('burgers_db', 'root', 'password', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

module.exports = sequelize;
