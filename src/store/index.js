import Vue from 'vue';
import Vuex from 'vuex';
import menu from '@/config/menu.config';
import user from '@/store/modules/user';
import progress from '@/store/modules/progress';
import collapse from '@/store/modules/collapse';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: menu
  },
  getters: {
    menu: state => state.menu
  },
  modules: {
    user,
    progress,
    collapse
  }
});
