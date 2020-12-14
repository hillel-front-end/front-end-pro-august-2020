<template>
  <div class="briz">
    Briz component {{ getFoo }}
    <br />
    <button @click="changeFoo()">change foo</button>
    <input v-model="text" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MutationTypes from "@/store/mutation-types";

export default {
  name: "Briz",
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapGetters(["getFoo"]),
  },
  methods: {
    ...mapMutations([MutationTypes.FOO_MUTATION]),
    changeFoo() {
      //this.$store.commit(MutationTypes.FOO_MUTATION, this.text);
      console.log(this, "this");
      //this[MutationTypes.FOO_MUTATION](this.text);
      this.$store.dispatch('asyncChangeFoo', {text: this.text});
    },
  },
};
</script>

<style scoped>
.briz {
  border: 1px dashed blue;
}
</style>
