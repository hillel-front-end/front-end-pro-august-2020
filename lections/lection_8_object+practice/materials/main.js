var arr = [];

//  function foo(a) {
//     a[a.length] = 10;
//  }
// console.log(arr, 'arr');
var z = 16;

function foo(a) {
    a = 15;
 }

foo(z);

console.log(z, 'z');

var g = 16;
var b = g;

b = 17;

console.log(g, 'g');
console.log(b, 'b');

arr = [1, 2, 3]

h = arr;

h[1] = '11111111';

z = h;

z[0] = '!!!!!!!!!!';

console.log(h, 'h');
console.log(z, 'z');    
console.log(arr, 'arr');


//------------ Object-----------------

arr = [['a', 17, 'forward'], 'b', 'c', 'd']



// box = {
//     width: '100px',
//     height: '200px',
//     selector: '.box'
// }



for(var i = 0, arr = []; i < 5; i++) {
    arr.push({
        width: '100px',
        height: '200px',
        selector: '.box'
    })
}

console.log(arr, 'arr')


player = {
    name: 'Valera',
    lastName: 'Ternavsky',
    age: 25,
    isMarried: false, 
    run: function() {
        console.log('running...')
    }
}


console.log(player.name)
console.log(player.age)
player.run();

key = 'age';

console.log(player[key])

key = 'name';
console.log(player[key])

// player.key

player.foo = '123';
console.log(player, 'pla');

player['foo'] = 'fggggg';
console.log(player, 'pla');

player = Object.freeze(player);

player.foo = [1, 2];
player.name = "Pety";
console.log(player, 'player');



FIRST_NAME = "Valera";

function dictionary() {
    var CODES = {
        'kiyv': 7655,
        'slavitch': 655
    }
    
    function getCode(city) {
        var code = CODES[city.toLowerCase()];

        if (!code) {
            console.log(city + ' is not defined');
        }
        return code;
    }

    function setCode(city, code) {
        CODES[city.toLowerCase()] = code;
    }



    return {
        getCode: getCode,
        setCode: setCode
    }
}

var config = dictionary();

console.log(config.getCode('Kiyv'));

config.setCode('DniPro', 8645);

console.log(config.getCode('Dnipro'), 'Dnipro')

config.getCode('Dnasdsadasdipro')


var g = {
    z: {
        
    }
}

// ------ practice -------

var arr = 

new Array(
    new Array(new Array(13), new Array(5), new Array(3)), 
    new Array(3),  
    new Array(
        new Array(new Array(new Array(6), new Array(new Array(10), new Array(6)))), 
        new Array(4)
    )
);


function arryFiller(mass) { // mass = arr
    for(var i = 0; i < mass.length; i++) {
        if (Array.isArray(mass[i])) {
            arryFiller(mass[i]);
        } else {
            console.log(mass[i], 'it is not array');
            mass[i] = Math.ceil(Math.random() * 10);
        }
    }

    console.log(mass, 'mass');
}

arryFiller(arr);

g = [
        [ 1, 2, 3, [3.1]], 
        4, 
        [ 5, 6, [7, 8] ]
    ];

function convert(arr) {

}

convert(g);//[1,2,3,3.1,4,5,6,7,8]