import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameUser: '',
    nameItem: '',
  },
  mutations: {
    setNameUser(state, nameUser) {
      if (nameUser) {
        state.nameUser = nameUser;
      }
    },
    setNameItem(state, nameItem) {
      if (nameItem) {
        state.nameItem = nameItem;
      }
    },
  },
});
