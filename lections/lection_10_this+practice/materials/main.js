function iterator() {
    var count = 0;

    return function() {
        console.log(++count, 'count');
    }
}

var increment = iterator();

console.log(increment, 'increment');

iterator = null;

increment();
increment();
increment();
increment();

// iterator()


function sum(a, b) {
    console.log(sum);
    var sum = a + b;
}

// var foo = increment() //foo = increment
// var foo = increment;




var b = {};

// var c = b;

// c.a = 15;



/// ---------------- this -----------------


function foo() {

    console.log(this);
}


// foo();


function c() {
    foo();
}

c();



var obj = {
    name: 'Valera',
    lastName: 'Ternavsky',
    getFullName: getFullName,
    foo: foo
}

var ob2 = {
    name: 'Pety',
    lastName: 'Pytov',
    getFullName: getFullName
}

function getFullName(name, lastName) {
    return this.name + " " + this.lastName;
}




obj.foo();

console.log(obj.getFullName());
console.log(ob2.getFullName());

// console.log(getFullName(), 'obj.getFullName();');
// getFullName(obj2.name, obj2.lastName);

// getFullName(obj.name, obj.lastName);

var arr = [];
var arr2 = [1, 2, 3];

function myPush(v) {
    this[this.length] = v;
}

arr.myPush = myPush;

arr.myPush(10)

arr2.myPush = myPush;

arr2.myPush(4)

console.log(arr, 'arr');
console.log(arr2, 'arr2');

console.log([])

function myJoin(separator) {
    var str = '';

    console.log(this, 'this');
    for(var i = 0; i < this.length - 1; i++) {
        str += this[i] + separator;
    }

    str += this[this.length - 1];

    return str;
}

arr2.myJoin = myJoin;

console.log(arr2.myJoin('&'));




function myReverse() {
    for(var i = 0; i < this.length / 2; i++) {
        temp = this[i];
        this[i] = this[this.length - (1 + i)];
        this[this.length - (1 + i)] = temp;
    }
}  

arr2.myReverse = myReverse;

arr2.myReverse();


console.log(arr2, 'arr2')

// --------- 3 ---------

var obj = {
    result: '',
    m1: function() {
        console.log('m1');
        this.result += 'm1';
        return this;
    },
    m2: function() {
        this.result += 'm2';
        console.log('m2');
        return this;
    },
    m3: function() {
        this.result += 'm3';
        console.log('m3');
        return this;
    },
    m4: function() {
        this.result += 'm4';
        console.log('m4');
        return this;
    }
}

obj.m1().m2().m3();

// obj.m3().m1().m4();

console.log(obj.result, 'res');



