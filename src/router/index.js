import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from '@/config/router.config';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/dashboard',
      children: routers,
      meta: {
        title: '首頁'
      },
      component: () => import('@/components/layout')
    },
    {
      name: 'login',
      path: '/login',
      meta: {
        title: '登入'
      },
      component: () => import('@/views/user/Login')
    }
  ]
});

router.afterEach(to => {
  document.querySelector('title').innerText = `${to.meta.title} | KKday Admin`;
});

export default router;
