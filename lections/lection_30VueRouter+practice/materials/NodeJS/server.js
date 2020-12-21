var express = require('express');
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3003;


app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------


function User({login, password, gender = "Not", age = "12", id}) {
    this.login = login;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.id = id;
}

function readFile(url, callback) {
    fs.readFile(url, 'utf8', callback);
}

function writeFile(url, data, callback) {
    fs.writeFile(url, JSON.stringify(data), callback);
}


