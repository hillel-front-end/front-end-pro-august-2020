// function a(toDo) {
//     if (toDo === 'sum') {
//         return function(a, b) {
//             return a + b;
//         }
//     } else if (toDo == 'mul') {
//         return function (a, b) {
//             return a * b;
//         }
//     }
// }

// a('mul')();
// console.log(foo, 'foo');

// a = 1;
// b = 2;

(function(a, b) {
    console.log(a, b);

    function a(toDo) {
        if (toDo === 'sum') {
            return function(a, b) {
                return a + b;
            }
        } else if (toDo == 'mul') {
            return function (a, b) {
                return a * b;
            }
        }
    }


})();

z = 'var from main.js'


// ------- recursive -----------

// function foo() {

//     foo();

//     console.log('recursive');
// }

// foo()


function loop(array, i) {
    i = i || 0;

    if (array.length == i) {
        return false;
    }

    // console.log(array[i]);
    loop(array, i + 1);
    console.log(array[i]);
}


loop([1, 2, 3, 4]);


console.log('after recursive')

function sumTo(n) {
    if (n == 1) {
        return 1;
    }

    return n + sumTo(n - 1);
}

console.log(sumTo(1), '1');
console.log(sumTo(2), '2');

console.log(sumTo(3), '3');