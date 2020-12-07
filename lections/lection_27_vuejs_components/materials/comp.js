// Vue.component('main-app');
Vue.component('MainApp', {
    data() {
        return {
            appName: 'Store',
            version: '1.0.0'
        }
    },
    methods: {
        showAppName() {
            alert(this.appName);
        }
    },
    template: `
        <div class="main-app">
            {{ appName }}, {{ version }}
            <br />
            <button @click="showAppName()">show</button>
            <hr />
            <navigation-app />
        </div>
    `
});

Vue.component('NavigationApp', {
    data() {
        return {
            currentTouchedButton: '',
            items: [
                'save',
                'edit',
                'close',
                'open',
                'update'
            ]
        }
    },
    methods: {
        listenChild: ({ title }) => {
           this.currentTouchedButton = title;
        }
    },
    template: `
        <div class="navigation">
            <navigation-item 
                v-for="item in items"
                :sendTitle="listenChild"
                :buttonTitle="item"
            />

            <hr />

            <show-info
                :foo="currentTouchedButton"
            >
            </show-info>
        </div>
    `
});

Vue.component('NavigationItem', {
    props: ['buttonTitle', 'sendTitle'],
    data() {
        return {

        }
    },
    methods: {
        sendTitle() {
            this.$emit('sendTitle', {title: this.buttonTitle})

        }
    },
    template: `
        <span 
            class="navigation__item"
            @click="sendTitle()"
        > 
            {{ buttonTitle }} 
        </span>
    `
});

Vue.component('ShowInfo', {
    props: ['foo'],
    data() {
        return {

        }
    },
    template: `
        <div class="show-info">
          Component show info: {{foo}}
        </div>
    `
});

const vue = new Vue({
    el: '#app'
});