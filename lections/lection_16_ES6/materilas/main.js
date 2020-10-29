var arr = [2, 6, 7, 0, 22];

arr.sort(function(a, b) {
    return a - b;
}).reverse();

// console.log(arr, 'artr');

arr.forEach(function(value, index) {
    // console.log(value, index);
});

var persons = [
    {
        name: 'Valera'
    },
    {
        name: 'Pety'
    },
    {
        name: 'Nikola'
    }
]

// var mass = arr.map(function(value, index) {
//     return value + 1;
// });

var names = persons.map(function(person, index) {
    return person.name || 'unamed';
});

var items = [
    { name: 'Edward', age: 21 },
    { name: 'Sharpe', age: 37 },
    { name: 'And', age: 45 },
    { name: 'The', age: -12 },
    { name: 'Magnetic', age: 100 },
    { name: 'Sharpe', age: 37 }
  ];

var filtered = items.filter(function(item) {
    return item.age > 18 && item.age < 40;
});


var filtered = items.map(function(item) {
    return item.age
}).filter(function(item) {
    return item > 18 && item < 35;
});

console.log('new filtered => ', filtered);

// var total = items.reduce(function(previous, current) {
//     return previous + current.age;
// }, 0);

var names = items.reduce(function(previous, current) {
    var value = previous[current.name];
    previous[current.name] = value === undefined ? 1 : ++value;

    return previous;
}, {});


// console.log(names, 'names');

// var middle = total / items.length;


// ---------- es-6 ------------

// console.log(k, 'k'); // error; bad
let k;

console.log(k, 'k');

// let k = 13; bad
// k = 12;


if (false) {
    let z = 12;
}

// console.log(z, 'z');


// for(let i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i, 'i');
//     }, 1000);
// }


const PI = 3.14;

const name = 'Valera';

// name = 'Nik';


const person = Object.freeze({
    name: 'Login'
});


// person.name = 'Vae'

person.name = 'Pety';

console.log(person, 'person');

// console.log(person, 'person');



z();


const arrow = (a, b) => {
    // console.log(arguments, 'arg');

    console.log(this, 'this');
    console.log('aaa', a, b);
};

arrow(1, 2);

var obj = {
    name: 'Valera',
    toDo: () => {
        console.log(this, 'this');
    }
}

// const toDo = obj.toDo.bind(this);


function z() {

    const arrow = (a, b) => {
        // console.log(arguments, 'arg');
        console.log(this, 'this');
        console.log('aaa', a, b);
    };

    arrow(1, 2);
}


z.call(obj);


// toDo();



const func = a => a > 10;


// function foo(a) {
//     return a > 10;
// }

var items = [
    { name: 'Edward', age: 21 },
    { name: 'Sharpe', age: 37 },
    { name: 'And', age: 45 },
    { name: 'The', age: -12 },
    { name: 'Magnetic', age: 100 },
    { name: 'Sharpe', age: 37 }
  ];


  items
    .map(item => item.age)
    .sort((a, b) => a - b)
    .filter(a => a > 18)
    .forEach(a => console.log(a, 'a'));


const key = 'world'
const USER_IFO = 'USER_INFO';

const user = {
    run() {
        console.log(arguments, 'arg');
        console.log(this, 'this');
    },
    jump() {

    },
    ['hello' + key]: 20,
    [USER_IFO]: {
        name: 'Pety',
        lastName: 'Ternavskiy',
        get fullName() {
            return this.name + ' ' + this.lastName; 
        },
        set fullName(_fullName) {
            let spliteFullName = _fullName.split(' ');
            this.name = spliteFullName[0];
            this.lastName = spliteFullName[1];
        }
    }
};

console.log(user[USER_IFO])

const h = user[USER_IFO];

console.log(h.fullName, 'h');

h.fullName = 'Pety Petrov';

console.log(h, 'h');
// user.run('a');