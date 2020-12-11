var express = require("express"); 
var app = express();
var bodyParser = require("body-parser"); 
var { read } = require('./helper/');

const port = 3003;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.get('/products', (req, res) => {
  read('./models/products.json', function(error, data) {
    console.log(error, 'erroe');
    res
      .send(data)
  });
});

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});
