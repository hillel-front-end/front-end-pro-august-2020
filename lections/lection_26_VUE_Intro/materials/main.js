// console.log('Lection 23 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/
// console.log(Vue, 'vue');

var config = {
    el: '#app',
    data: {
        hello: 'Hello world',
        arr: [1, 2, 3, 4],
        isBought: true,
        href: 'https://lms.ithillel.ua/',
        getIsBought() {
            console.log(this.$data, 'this');
            return this.$data.isBought
        },
        getStore() {
            return this.$data.arr
                .map(item => `<li>${item}</li>`)
                .join('');
        },
        login: '',
        age: 10,
        onClick() {
            console.log('click');
        },
        goods: [
            { name: 'juice', coast: 1, isBougth: false },
            { name: 'cola', coast: 2, isBougth: true },
            { name: 'sprite', coast: 3, isBougth: false },
            { name: 'sprite', coast: 3, isBougth: true },
            { name: 'sprite', coast: 30, isBougth: false }
        ],
        product: '',
        addProduct() {
            console.log(this, 'this');

            this.$data.goods.push({
                name: this.$data.product,
                isBougth: true
            });

            console.log(this.$data.goods, 'this.$data.goods ')

        }
    }
};


const vue = new Vue(config);
