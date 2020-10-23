// call apply bind


function getName(decor1, decor2) {
    console.log(decor1, decor2);
    return console.log(this.name + decor1);
}


var person = {
    name: "Valera"
}

var personSecond = {
    name: "Pety"
}

// person.getName = getName;
// console.log(person.getName());
// delete person.getName;


//funcName.call(context)


// getName.call(person, 1, 2); // person.getName()
var arr = [1, 2, 5, 4, 6];


getName.apply(person, arr);

console.log(person, 'person');



function foo() {
    // var slice = [].slice;

    // console.log(slice, 'slice');

    // var arr = slice.call(arguments);

    // console.log(arr, 'arr');


    console.log([].slice.call(arguments, 1));

}


foo(1, 2, 3, 4, 5);


// ------------------ bind ------------

/// func.bind(context, arg)




var obj = {
    name: "valera"
};


function getName(decor1, decor2) {
    console.log(decor1, decor2);
    return console.log(this.name + decor1);
}

// getName();


var getName = getName.bind(obj, 'aaaa');



getName();