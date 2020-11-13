window.onload = function() {
    const box = document.querySelector('.box');
    
    function initDragAndDrop(element) {
        const state = {
            shiftX: 0,
            shiftY: 0
        };

        const actions = {
            onDrag({offsetY, offsetX}) {
                state.shiftX = offsetX;
                state.shiftY = offsetY;
                console.log(state, 'state');

                element.classList.add('drag');
                document.addEventListener('mousemove', this.onMove);
            },
            onDrop() {
                console.log('aaaa')
                element.classList.remove('drag');
                document.removeEventListener('mousemove', this.onMove);
            },
            onMove({pageX, pageY}) {
               const {shiftX, shiftY} = state;

               element.style.top = `${pageY - shiftY}px`;
               element.style.left = `${pageX - shiftX}px`;
            }
        };

        console.log(element, 'element');

        element.addEventListener('mousedown', actions.onDrag.bind(actions));
        element.addEventListener('mouseup', actions.onDrop.bind(actions));
    }

    initDragAndDrop(box);
};