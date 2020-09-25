// ------- hoisting -------
// foo = undefined;
// anothertoDo = undefined;
//a = undefined
//b = undefined
/*
function toDo(a) {
    console.log('to Do', a);
}

*/

//Global scope--> window


// function module() {

//     var a = 'I am gloval var'
//     //Module scope
//     toDo(1111);

//     // console.log(foo, 'foo before');
//     // console.log(anothertoDo,'anothertoDo');

//     var foo;

//     // console.log(foo, 'foo after');

//     toDo('before')

//     function toDo(a) {
//         // console.log('to Do', a);
//     }

//     toDo('after')

//     // anothertoDo();

//     var anothertoDo = function(v) {
//         console.log('another to Do', v);
//     }

//     anothertoDo();

//     console.log(a, 'a before');

//     if (true) {
//         var a = 12;
//     }

//     console.log(b, 'b before');

//     for(var i = 0; i < 2; i++) {
//         var b = 13;
//     }

//     function foo() {
//         var c = 14;
//     }

//     // console.log(c, 'c');
//     console.log(b, 'b');
//     console.log(a, 'a');
// }

// var c = 121212;

// function foo() {
//     var c = 121212;
//     a = '11111111111111111';

//     function z() {

//     }
// }

// foo();

// console.log(z, 'z')
// console.log(window, 'window');



// --------- Lexical Environment -----------


var b = 'Global var';
//window.b = b;

//window.foo = foo

function foo(j) {
    /*
    LE = { a: undefined, g: undefined, foo2: func, j: 123}
   */
    // console.log(window.b)
    // console.log(b, 'b');
    // var b = 'local var';
    // LE = {b: 'local var', a: undefined, g: undefined, foo2: func, j: 123}

    var a = 12;
    // LE = {b: 'local var', a: 12, g: undefined, foo2: func, j: 123}

    var g = function() {

    };
    // LE = {b: 'local var', a: 12, g: func, foo2: func, j: 123}

    function foo2() {

    }

    // LE = null
}

// foo(123);

// foo()

// console.log( g)

// --------- scope ----------
var b = 'Global';


function c1() {
    
    //LE = {a: undefined, b: undefined, scope: window, c2: func}
    console.log(b, 'b'); //LE_C.scope.b
    
    d = 15;
    // var b = 16;
    var a = 13;
    //LE = {a: 13, b: 16, c2: func, scope: window}
    console.log(d, 'd'); //LE_C.scope.b

    function c2() {
        //LE = {scope: LE_C1}
        d = 100000000;
    }

    c2();
    //LE = {a: 13, b: 16, d: 100000000, c2: func}
    console.log(d, 'd')


}

c1();


function compare() {
    g();
    return;

    function g() {
        console.log('Toooo DOoo');
    }

}

compare();

var z = 13;

function toDo() {
    //LE = {scope: window}
    console.log(z, 'z');

    var z;

    //[[Scopes]] --> window
}

toDo();

console.dir(toDo['[[Scopes]]'], 'toDo');
