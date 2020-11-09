/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
*/



window.onload = function() {

    // setTimeout(() => {
    //     box.removeAttribute('foo');
    // }, 1000);


    // const actions = {
    //     close() {
    //         console.log('close');
    //     },
    //     edit() {
    //         console.log('edit');
    //     },
    //     open() {
    //         console.log('open');
    //     } 
    // }

    const buttons = document.querySelectorAll('[data-action]');

    console.log(buttons, 'buttons');

    // buttons.forEach(button => {
    //     // console.log(button, 'button');
    //     // console.log(button.dataset.action, 'action');
    //     button.addEventListener('click', actions[button.dataset.action])
    // });


    /// createElement


    const data = document.createElement('div');

    // document.body.append(data); bad

    console.dir(data,'data');
    data.innerText = 'hello world';
    data.style.color = 'blue';

    // document.body.append(data, 'Hello world');
    // document.body.appendChild('Text'); throw exeption


    setTimeout(() => {
        // document.body.prepend(data);
        // document.body.after(data);
        document.body.before(data);
    }, 3000);

    // parentNode.append(); 
    // document.body.append();


    const goods = [
        { name: 'juice', coast: 1, isBougth: false },
        { name: 'cola', coast: 2, isBougth: true },
        { name: 'sprite', coast: 3, isBougth: false },
        { name: 'sprite', coast: 3, isBougth: true },
        { name: 'sprite', coast: 30, isBougth: false }
    ];


    const container = document.querySelector('.goods-conteiner');
    const fragment = document.createDocumentFragment();
    // const div = document.createElement('div');


    console.dir(fragment, 'fragmen');

    goods.forEach(good => {
        const goodsItem = document.createElement('section');
        goodsItem.innerText = good.name;
        goodsItem.classList.add(good.isBougth? 'bought': 'not-bought');
        fragment.append(goodsItem);
    });

    container.append(fragment);



    // const buttonOpen = document.querySelector('.open');


    // console.log(buttonOpen, 'buttonOpen');


    const actions = {
        close() {
            console.log('close');
        },
        edit() {
            console.log('edit');
        },
        open() {
            console.log('open');
        } 
    };




    document.querySelector('.parent').addEventListener('click', ({ target }) => {
        const action = target.dataset.action;
        const cb = actions[action];

        if (typeof cb === 'function') {
            actions[action]();
        }
    });



};