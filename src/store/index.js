import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameUser: '',
  },
  mutations: {
    setNomeUser(state, nameUser) {
      if (nameUser) {
        state.nameUser = nameUser;
      }
    },
  },
});
