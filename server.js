const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');




//server listen
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
})
