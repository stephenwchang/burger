const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// public directory
app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


//server listen
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
})
