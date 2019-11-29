var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/contact', function(req, res) {
  console.log(req.apiGateway.event);
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/contact', function(req, res) {
  console.log(req.apiGateway.event);
  res.send({
    "Output": "Hello World!"
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
