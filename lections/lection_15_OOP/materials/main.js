
function HTMLElement() {}

Object.prototype.render = function() {
    console.log('render from prototype HTMLElement');
    this.el = {};
} ;

// HTMLElement.prototype.render = function() {
//     console.log('render from prototype HTMLElement');
//     this.el = {};
// } ;

// HTMLAnchor.prototype = HTMLElement.prototype; //bad 

function HTMLAnchor(id, href, className, callback) {
    this.id = id;
    this.href = href;
    this.className = className;

    if (typeof callback === 'function') {
        this.redirect = callback;
    }

}


// HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;

HTMLAnchor.prototype = Object.create(HTMLElement.prototype);
// console.log(HTMLAnchor.prototype, 'HTMLAnchor.prototype');

HTMLAnchor.prototype.redirect = function() {
    console.log('proto redirect http://lolo.com')
}

// HTMLAnchor.prototype.render = function() {
//     console.log('render from prototype HTMLAnchor');
// }

var a1 = new HTMLAnchor('go', 'http://azza.com', 'link');

// console.log(a1, 'a1');

// a1.redirect();

a1.render();    




// // (function(){}).render();
// Array.prototype.someFunc = function() {
//     console.log('work');
// }


/*
class Iphone {
    void Person() {

    }

    private void runProccer() {

    }

    public void buttonPress() {
        this.runProccer()
    }
}

Person person = new Person()

person.toDo()// error
*/

Slider.sortPictures = function() {

}


function Slider(pictures) {
    var _index = 0;
    var _pictures = Slider.sortPictures(pictures || getPicturesFromServer());
    var _size = pictures.length;

    Slider.logs.push('create new instance');

    function getPicturesFromServer() {

    }
     
    this.getterIndex = function() {
        return _index;
    }

    this.setterIndex = function(value) {
        if (value && (value > 0 && value < _size)) {
            _index = value;
        }
    }

}


Slider.prototype.next = function() {
    var nextItem = this.getterIndex() + 1;
    this.setterIndex(nextItem);

    Slider.logs.push('press button next');
}



Slider.prototype.previous = function() {
    console.log('previous');

    
    Slider.logs.push('press button previous');
}


Slider.logs = [];

Slider.printLogs = function() {

}


// var slider = new Slider(Slider.sortPictures([
//     'pic-1',
//     'pic-2',
//     'pic-3',
//     'pic-4',
// ]));


// console.log(slider, 'slider');

// slider.next();
// slider.next();

// slider.previous();


console.log(Slider.logs, 'logs');

// console.log(slider.next(), 'slider');


/*
interface IPerson {
    name: String,
    lastName: String,
    isMarried: Boolean
}
*/
// var person: IPerson = {}


// Integet z = 2;


class SliderSecond {
    static sortPictures() {
        console.log('work!!!');
    }

    static changeSize() {

    }

    next() {

    }


    pressOnPicture() {
        SliderSecond.sortPictures()
    }

    previous() {

    }
}

var a = new SliderSecond();

a.pressOnPicture();

SliderSecond.sortPictures();
