import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from '@/config/router.config';
// import { isLogin } from '@/utils/cookie';
import Store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/antd-vue-basic',
  routes: routers
});

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isLogin()) {
  //   return next({ name: 'Login' });
  // }

  Store.dispatch(
    'handleCollapsed',
    ['Editing', 'CaseAssignmentReview'].includes(to.name)
  );

  Store.dispatch('handleProgress', true);
  return next();
});

router.afterEach((to, from, next) => {
  Store.dispatch('handleProgress', false);
  document.querySelector('title').innerText = `${to.meta.title} | Katalyst`;
});

export default router;
