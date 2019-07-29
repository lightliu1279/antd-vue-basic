import Vue from 'vue';
import App from '@/App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import { sync } from 'vuex-router-sync';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import PortalVue from 'portal-vue';

import router from '@/router';
import store from '@/store';

Vue.use(Antd);
Vue.use(PortalVue);
Vue.config.productionTip = false;
Nprogress.configure({
  showSpinner: false,
  easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  speed: 500
});

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
