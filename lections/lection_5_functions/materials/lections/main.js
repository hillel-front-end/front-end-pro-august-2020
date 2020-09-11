// /*
//   Lection 5 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

// arr = [1, 2, 3, 4, 5, 6];

// count = arr.length % 2 == 0? 2 : 1;
// position = Math.ceil(arr.length / 2) - 1;
// arr.splice(position, count);


// console.log(arr, 'arr');
// alert(), promot(), confirm()


// function arrayFiller() {
//    console.log('arrayFiller -- declaration');
// }

// // arrayFiller();

// arrayFiller = function() {
//    console.log('arrayFiller -- expression');
// }

// arrayFiller();


// function arrayFiller(size, array, min, max) {


//    if(!array) {
//       return false;
//    }

//    console.log('after return');
//    array.length = size;
//    min = min || 5;
//    max = max || 10;

//    for(i = 0; i < array.length; i++) {
//       array[i] = new Array(size);

//       for(j = 0; j < array[i].length; j++) {
//          array[i][j] = Math.ceil(Math.random() * (max - min) + min);
//       }
//    }

//    // return array;
// }


// // console.log(size, 'size')
// result = arrayFiller(4, []);
// console.log(result, 'result')
// // alert('Hello')



function arrayFiller(size, array, min, max) {
// arguments = [10, [], 5, 10, 'Hello Front-end Basic']

for(j = 0; j < arguments.length; j++) {
   console.log(arguments[j], 'arguments[j]');
}


console.log(arguments, 'arguments');
   for(i = 0; i < array.length; i++) {
      array[i] = new Array(size);

      for(j = 0; j < array[i].length; j++) {
         array[i][j] = Math.ceil(Math.random() * (max - min) + min);
      }
   }
   console.log(arguments.slice, 'slice');
   console.log(array.slice, 'slice');
   return array;
}


// arrayFiller(10, [], 5, 10, 'Hello Front-end Basic');




function toDo(callback) { // callback = foo
   callback();
}

foo = function(){
   console.log('fooo');
}

console.log(toDo, 'todo');

toDo(foo);
// arrayFiller();


function a() {
   console.log('a')
}

function b() {
   console.log('b');
   a()
}

b();  