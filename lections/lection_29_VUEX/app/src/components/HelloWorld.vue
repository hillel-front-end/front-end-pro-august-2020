<template>
  <div class="hello">
    <Foo />
    <Briz />
  </div>
</template>

<script>
import Foo from "./Foo.vue";
import Briz from "./Briz.vue";

export default {
  name: "HelloWorld",
  components: {
    Foo,
    Briz,
  },
};
</script>

<style scoped>
* {
  font-size: 40px;
}
</style>
