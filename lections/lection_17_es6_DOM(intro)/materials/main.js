function getName(greeting) {
    return `Valera ${greeting}`;
}

let str = `hello workd ${24 + 25} ${getName('Hello')}`;

console.log(str, 'str');



let person = "Valera" + (25 + 24);
// let foo = "hello 
// world";


let foo = `Hello ${`${25 + 25} world`}`;
const goods = [
    { name: 'juice', coast: 1, isBougth: false },
    { name: 'cola', coast: 2, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: true },
    { name: 'sprite', coast: 30, isBougth: false }
];


// console.log(goods.map(good => '<li>' + good.name + '</li>'))

// const markup = 
// '<div  class="goods-wrapper">'  
//    + '<ul class="goods">'  
//         + (goods.map(good => '<li class="goods__item">' + good.name + '</li>').join(''))
//    + '</ul>'
// +'</div>';


const isRow = true;

const markup = `
<div class="goods-wrapper">
    <ul class="goods ${isRow? 'row': 'column'}">
        ${goods.map(({isBougth, name, coast}) => `<li class="goods__item ${isBougth? 'bought': ''}"> ${name}, ${coast}$ </li>`).join('')}
    </ul>
</div>
`

// console.log(markup, 'markup');

document.write(markup);




const product =  { 
    name: 'sprite', 
    coast: 30, 
    isBougth: false,
    childs: {
        login: 'Aaa'
    }

};


// let name = product.name;
// let coast = product.coast;
// let childs = product.childs.login;

const {
    name, 
    isBougth, 
    coast: c, 
    childs: { login }
} = product;






// const c = product.coast;


// console.log(name, isBougth, c, login);

const array = [1, 2, 3, 4];

// let a0 = array[0];

const [a,, b , d] = array;

// console.log(a,b , d, 'a, b, c , d');


// func




function foo2({name, coast}, zoo = []) {
    console.log(name, coast);

    // zoo = zoo || [];
    console.log(zoo, 'zoo');
}

foo2({ name: 'sprite', coast: 30, isBougth: false }, [{name: 'lion'}]);