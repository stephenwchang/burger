
const Burger = require('../models/burgers.js');


module.exports = function(app) {
  app.get('/' , function(req, res) {
    Burger.findAll().then(function(result) {
      res.render('home', { burger: result});
    });
  })
}
