import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from './modules/home-view.js'
import Authorization from '../views/Authorization.vue'
import Regestration from '../views/Regestration.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     meta: {
//       roles: 'admin',
//       auth: true
//     },
//     component: Home,
//     beforeEnter({ meta }, from, next) {
//       console.log('callback from router');
//       next()
//     }
//   },
//   {
//     path: '/auth',
//     name: 'Authorization',
//     meta: {
//       auth: false
//     },
//     component: Authorization
//   },
  // {
  //   path: '/contacts',
  //   meta: {
  //     roles: 'admin|user|moderator',
  //     auth: true
  //   },
  //   name: 'Contacts',
  //   component: Contacts
  // },
//   {
//     path: '*',
//     name: "NotFound",
//     component: NotFound
//   }
// ]
const routes = [
  HomeView,
  {
    path: '/auth',
    name: 'Authorization',
    meta: {
      auth: false
    },
    component: Authorization
  },
  {
    path: '/regestration',
    name: 'Regestration',
    meta: {
      auth: false
    },
    component: Regestration
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


// router.beforeEach(({ meta }, from, next) => {
//   // const { isAuth } = store.state;

//   //   if (meta.auth && !isAuth) {
//   //     next('/auth');
//   //     return;
//   //   }

//   //   next();
// });

export default router
