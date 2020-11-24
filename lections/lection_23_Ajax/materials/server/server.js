var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 3005;

app.get("/users", function (req, responce) {
  console.log(req.params.foo, "params ");

  read("./models/data.json", (error, jsonPayload) =>
    responce.status(200).send(jsonPayload)
  );
});

app.post("/users", function (req, responce) {
  console.log(req.body, "params ");
  // responce.status(200).send(jsonPayload)
  const url = "./models/data.json";

  read(url, (error, jsonPayload) => {
    const currentData = JSON.parse(jsonPayload);
    const newData = JSON.parse(req.body);
    currentData.push({
      ...newData,
      id: Math.round(Math.random() * 50),
    });

    writer(url, JSON.stringify(currentData));
  });
});

function read(url, callback) {
  fs.readFile(url, "utf-8", callback);
}

function writer(url, data) {
  fs.writeFile(url, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});
