<template>
    <div class="contacts">
        Hello from page contacts
        <button @click="gotToAnotherView('about')">change path</button>
        <router-view />
    </div>
</template>


<script>
export default {
    methods: {
        gotToAnotherView(path) {
            console.log(this.$router, 'this');
            // this.$router.push(`/about`);
            console.log('route');
            console.log(this.$route.meta.roles.split('|'))
        }
    }
}
</script>