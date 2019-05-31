import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from '@/config/router.config';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/kkday_admin',
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
    }
  ]
});

export default router;
