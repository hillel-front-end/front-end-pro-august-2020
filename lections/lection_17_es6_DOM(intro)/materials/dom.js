/*
+ Глобальные обьекты Window, Document
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
*/

// DOM - Document Object Model
// Browser object model


console.dir(document.body, 'document');//body
console.dir(document.documentElement, 'html');

const divs = document.getElementsByTagName('div');

// console.log(divs[0].tagName, 'tagName');

// console.log(divs, 'divs');


// [].forEach.call(divs, (div) => console.log(div, 'div'));

var classes = document.getElementsByClassName('item');

console.log(classes, 'classes');

const id = document.getElementById('foo');

// console.log(id.tagName, 'id');

const element = document.querySelector('.parent div.item');
const elements = document.querySelectorAll('div.item');

console.dir(element, elements)

// element.className += ' container';

console.log(element.classList, 'element.classList'); // add, remove, toggle, replace

// element.classList.add('accent');

console.log(element.className, 'className');


// setTimeout(() => {
//     // element.align = 'center';
//     element.classList.add('accent');
// }, 2000);


// setTimeout(() => {
//     // element.align = 'center';
//     element.classList.remove('accent');
// }, 4000);




// setInterval(() => {
//     // element.align = 'center';
//     element.classList.toggle('accent');
// }, 1000);


// ------ innerHTML, innerText -----------

const goods = [
    { name: 'juice', coast: 1, isBougth: false },
    { name: 'cola', coast: 2, isBougth: true },
    { name: 'sprite', coast: 3, isBougth: false },
    { name: 'sprite', coast: 3, isBougth: true },
    { name: 'sprite', coast: 30, isBougth: false }
];

const isRow = true;

const markup = `
<div class="goods-wrapper">
    <ul class="goods ${isRow? 'row': 'column'}">
        ${goods.map(({isBougth, name, coast}) => `<li class="goods__item ${isBougth? 'bought': ''}"> ${name}, ${coast}$ </li>`).join('')}
    </ul>
</div>
`

const markup2 = document.querySelector('.markup');

console.dir(markup2, 'markupo'); 

// markup2.innerHTML = markup;
// markup2.innerText = markup;


const input = document.querySelector('[type="text"]');

console.dir(input.value = 'Hello front-end pro', 'input');


const block = document.querySelector('.block');

console.dir(block, 'block');

// block.style.color = 'red';

// block.foo = 11111;


setTimeout(() => {
    // element.align = 'center';
    // element.classList.remove('accent');
    block.style.color = 'red';
    block.style.fontSize = '16px';
}, 4000);



