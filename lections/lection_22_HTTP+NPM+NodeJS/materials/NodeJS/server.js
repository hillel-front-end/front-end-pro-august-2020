var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 3003;

// запусть наше nodeJs приложении на порту 3002 по адресу http://localhost:3002/
/* 
 теперь мы знаем куда мы можем обращаться к нашей nodeJS программе
 чтоб получить данные.
 (по адресу) http://localhost:3000/. 
 
*/
app.listen(port, function () {
  // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ---------------------------
/*
 // экспресс-программа(app).метод-запроса(get,post)([path], ф-я котора вызовется при обращении 
    на http://localhost:3000[path(напр. '/', '/user')]);
*/
//http://localhost:3000/ (GET)

app.get("/", function (req, res) {
  //node-moon
  console.log("work !!!!!!!!!!!!!!!", req.query.name);
});

//http://localhost:3000/ (GET)


app.get("/candidates", function (req, responce) {
  console.log(" call --------> /candidates");
  // req - обьект запроса, res -- обьект ответа
  console.log("THIS PATH - /candidates"); // Вызов обработчика на запрос с path ('/')
  responce.status(200); // вернуть статус запроса 200
  // console.log(Object.keys(req.query), "query");
  if (req.query.minAge) {
    const { minAge, maxAge } = req.query;
    responce.send(candidates.filter(({ age }) => age > minAge && age < maxAge));
    return;
  }

  responce.send(candidates); // вернуть данные туда от куда пришел запрос
});

//http://localhost:3003/candidates/:foo

app.get("/candidates/:foo", function (req, responce) {
  console.log(" call --------> /candidates/:id");
  console.log(req.params.foo, "params ");

  read("./models/data.json", (error, jsonPayload) =>
    responce.status(404).send(jsonPayload)
  );
});

// (error, jsonPayload) => {
//   responce.status(404).send(jsonPayload);
// }

function read(url, callback) {
  fs.readFile(url, "utf-8", callback);
}

/*
 статусы (res.status(200) - говорят о том как совершился запрос, положиельно(получили необходимые данные) или 
 негативно(что то пошло не так).
 200 - все прошло ок
 404- что то не найдено
 (https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP)
*/

//http://localhost:3000/all-users (GET)

app.get("/user", function (req, res) {});

/*
'/user/:id' - при запросе http://localhost:3000/user/123, мы можем получить значение :id 
 как свойство обьекта req.params -> req.params.id == 123
 Если бы было '/user/:foo', то req.params.foo == 123
*/
app.get("/user/id", function (req, res) {});

// Получить список всех пользователей
function getAllusers(req, res) {
  // res.status(200);
  // res.send({content: 123});
}

//GET Получить юзера по id (data) \ params, query

//http://localhost:3000/registration (post)

app.post("/registration", function (req, res) {
  const { id, login, password } = req.body; // req - обьект запроса, res -- обьект ответа
});

//http://localhost:3000/registration (get)
app.get("/registration", function (req, res) {
  //  res.send(data);
});
