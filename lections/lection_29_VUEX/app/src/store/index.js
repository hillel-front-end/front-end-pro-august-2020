import Vue from "vue";
import Vuex from "vuex";
import MutationTypes from "./mutation-types";
import AuthModule from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: "Hello word",
  },
  getters: {
    getFoo: ({ foo }) => foo,
  },
  mutations: {
    [MutationTypes.FOO_MUTATION](state, payload) {
      state.foo = payload;
    },
  },
  actions: {
    async asyncChangeFoo({ commit }, payload) {
      //const data = await (await fetch()).json()
      const data = "some text from server";
      commit(MutationTypes.FOO_MUTATION, data);
    },
  },
  modules: {
    AuthModule,
  },
});
