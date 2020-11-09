console.log('Lection 11');


// OOP 

/*
class Human {
    constructor() {

    }
}
*/

function Human(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    // console.log('work', this);
}

var valera = new Human('Valera', 'Ternavskiy');
var pety = new Human('Pety', 'Pytov');


function Box(width, heigth) {
    this.width = width;
    this.heigth = heigth;
    this.coordsX = 0;
    this.coordsY = 0;

    this.move = function() {

    }

    this.changePosition = function(x, y) {
        this.coordsX = x;
        this.coordsY = y;

        this.move();
    }
}


// console.log(new Box('100px', '200px'));

var box = new Box('100px', '200px');
var box2 = new Box('500px', '500px');


box.changePosition(100, 500);

// console.log(box, 'box');
// console.log(box2, 'box2');
// var arr = [];

// setInterval(function(){
//     arr.push(new Box('100px', '200px'));
// }, 3000)

/*
1) new -> create new object
2) call function constructor Human
3) this == new Human()
4) set __proto__

*/
// console.log(valera, 'valera');
// прототипное ООП





function HTMLElement(tagName) {
    this.tagName = tagName.toUpperCase();

    if (tagName === 'a') {
        this.redirect = function(url) {
            console.log('redirect to ' + url)
        }
    } else if (tagName === 'img') {
        this.showPicture = function() {
            console.log('Showing picture');
        }
    } else if (tagName === 'strong') {
        this.createTextBolder = function() {
            console.log('text bolder');
        }
    }
             
}

var obj = {}

obj.showPicture = function() {
    
}
 
console.dir(HTMLElement, 'HTMLElement');

// var a = new HTMLElement.prototype.constructor('a');
var a = new HTMLElement('a');
var img = new HTMLElement('img');
var strong = new HTMLElement('strong');

HTMLElement.prototype.render = function() {
    console.log('element is rendering..');
    this.el = {};
} ;

HTMLElement.prototype.name = 'hello';

console.log(a, 'a');
console.log(img, 'img');
console.log(strong, 'strong');

// console.log(a.__proto__.render == HTMLElement.prototype.render);
// console.log(a.__proto__.render == img.__proto__.render);


a.render();

// console.log(Array.prototype.constructor(), 'Array');