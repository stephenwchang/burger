
const Burger = require('../models/burgers.js');


module.exports = function(app) {
  // get request
  app.get('/api/burgers', function(req, res) {
    Burger.findAll().then(function(result) {
      return res.json(result);
    });
  });

  // post request
  app.post('/api/new', function(req, res) {
    console.log(req.body);
    Burger.create({
      burger_name: req.body.burgerName,
      devoured: false
    });
    res.status(204).end();
  });

  app.put('/api/devour/:id', function(req, res) {
    Burger.update(
      {devoured: true},
      {where: {id: req.params.id}}
    )
    res.status(204).end();
  })

}
