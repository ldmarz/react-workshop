var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(express.urlencoded())
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.post('/submit-form', function (req, res) {
  res.status(201).json({name: req.body.name});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
