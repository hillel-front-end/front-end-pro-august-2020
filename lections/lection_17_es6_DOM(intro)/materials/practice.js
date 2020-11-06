


function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function getRandomColor() {
   return `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
}

const boxes = document.querySelectorAll('.box');

console.log(boxes, 'boxes');

setInterval(() => {
    boxes.forEach(box => {
        const y = window.innerHeight - box.clientHeight;
        const x = window.innerWidth -  box.clientWidth;

        box.style.left = random(0, x) + 'px';
        box.style.top = random(0, y)  + 'px';

        box.style.height = random(200, 500) + 'px';
        box.style.width = random(200, 500)  + 'px';
        
        box.style.backgroundColor = getRandomColor();
    });
}, 1000);