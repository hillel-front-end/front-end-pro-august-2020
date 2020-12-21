<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/vacancies">Vacancies</router-link>
    </div>
    <div class="home__content">
        <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
