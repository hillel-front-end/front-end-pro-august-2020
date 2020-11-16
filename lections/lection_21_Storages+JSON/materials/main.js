console.log("Lection_21");

window.onload = function () {
  console.log(localStorage, "localstorage");

  const value = localStorage.getItem("foo");

  const formAuth = document.querySelector("form");

  function sirializeForm(form) {
    const info = {};

    // console.dir(form, 'form');
    [].forEach.call(form, (element) => {
      if (element.type != "submit" && typeof element.name === "string") {
        info[element.name] = element.value;
      }
    });

    // console.log(info, 'info');

    return info;
  }

  setFromStore([].slice.call(formAuth), "auth-form");

  formAuth.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = sirializeForm(this);
    localStorage.setItem("auth-form", JSON.stringify(data));
  });

  function setFromStore(items, key) {
    const dataFromStore = JSON.parse(localStorage.getItem(key));

    [].forEach.call(items, (element) => {
      if (element.type != "submit" && typeof element.name === "string") {
        element.value = dataFromStore[element.name];
      }
    });
  }

  // --------- Serialase JSON -----------

  var obj = {
    name: "Valera",
    age: 123,
    isMarried: true,
    foo: null,
  };

  const obj2 = {
    person: obj,
  };

  // obj.person2 = obj2;
  // obj2.person = obj;

  /*
JSON поддерживает следующие типы данных:

    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
    строки,
    числа,
    логические значения true/false,
    null.

*/

  var user = {
    login: "Valera",
    password: "123213",
  };

  const jsonUser = JSON.stringify(user);

  // localStorage.setItem('user', jtypeof JSON.parse(son)

  console.log(typeof jsonUser, "jsonUser");

  const foo = localStorage.getItem("user");
  console.log(JSON.parse(foo), "from localstorage");
};
