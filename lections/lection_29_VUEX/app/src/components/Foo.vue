<template>
  <div class="foo">
    FOO component
    {{ foo }}
  </div>
</template>

<script>
export default {
  name: "Foo",
  computed: {
    foo() {
      return this.$store.state.foo;
    },
  },
};
</script>

<style scoped>
.foo {
  border: 1px solid red;
  margin-bottom: 50px;
}
</style>
