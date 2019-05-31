import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menu: [
      {
        title: 'Dashboard',
        key: '1',
        route: {
          name: 'Dashboard'
        },
        icon: 'dashboard'
      },
      {
        title: '報表',
        key: '2',
        route: {
          name: 'Table'
        },
        icon: 'table'
      }
    ]
  },
  getters: {
    menu: state => state.menu
  },
  modules: {}
});

export default store;
