// ---------------------- bind ----------------------
function toDo(sometext) {
    alert(this.value + ' ' + sometext, 'this');
}


var foo = document.querySelector('#foo');

// var foo = {
//     name: "Valera"
// }

console.dir(foo, 'foo');

var toDo = toDo.bind(foo);


// toDo('hello');


// toDo('goodbay'); 


// function sendAjax(url, data) {
//     console.log(arguments, 'arg');
// }
// // ------  particle  -------------
// partSendAjax = sendAjax.bind(null, 'https://www.ecma-international.org/ecma-262/');

// partSendAjax(1);
// partSendAjax(2);
// partSendAjax(3);


// partSecondSendAjax = sendAjax.bind(null, '/user-auth');

// partSecondSendAjax();
// partSecondSendAjax();



var person = {
    firstName: 'Valera',
    run: function() {
        console.log(this, 'this');
        console.log(this.firstName, 'running ...');
    }
}

// person.run();

// console.log(person.run)
var foo = {
    firstName: 'BBBBBB',
    run: function() {
        console.log('gooooo' + ' ' + this.firstName);
    }
}


// setTimeout(foo.run.bind(foo), 2000);
// setTimeout(foo.run.bind(person), 2000);




function timeOut(callback, time) {
    console.log(callback, time);
}

// timeOut(person.run.bind(person), 5000);

// var callback = person.run;

// callback();

// setInterval(function(){
//     console.log('hello');
// }, 2000);


// --------------------------------------------------


// ----------------------- OOP ----------------------

// --------------------------------------------------



var person = {
    name: prompt(),
    lastName: prompt(),
}