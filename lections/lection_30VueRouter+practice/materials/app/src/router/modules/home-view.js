import Contacts from '@/views/Contacts.vue'
import Vacancies from '@/views/Vacancies.vue'
import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'

export default {
  path: '/',
  name: 'Home',
  meta: {
    roles: 'admin',
    auth: true
  },
  component: Home,
  children: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/contacts',
      meta: {
        roles: 'admin|user|moderator',
        auth: true
      },
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/vacancies',
      meta: {
        roles: 'admin|user|moderator',
        auth: true
      },
      name: 'Vacancies',
      component: Vacancies
    },
  ]
};