/*
Dom navigation
*/

/*events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
], 
*/


const box = document.querySelector('.box');

// box.onclick = function() {
//     console.log('onclick');
// };

// box.onclick = function() {
//     console.log('another');
// };


// box.onmousedown = function() {
//     this.classList.add('focus');
// };

// box.onmouseup = function() {
//     this.classList.remove('focus');
// };


// function handler() {
//     console.log('mousemove');
// }


// box.onmousemove = handler;

// box.onmouseenter = function() {
//     console.log('onmouseenter');
// };

// box.onmouseleave = function() {
//     console.log('onmouseleave');
// };

// box.oncontextmenu = function() {
//     console.log('oncontextmenu');
// };



// box.addEventListener('click', function() {
//     console.log('hello')
// });


box.addEventListener('click', Handler);

box.addEventListener('contextmenu', Handler);


function Handler(event) {
    console.log(event, 'event');


    this.innerHTML += `
    clientY:  ${event.clientY}, <br /> pageY: ${event.pageY}, <br /> 
    offsetY: ${event.offsetY}, offsetX: ${event.offsetX}
    `;
    event.preventDefault();
}