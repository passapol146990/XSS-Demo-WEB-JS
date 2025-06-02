const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./src/Route.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
