import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function loadView(view) {
  return () => import(`@/views/${view}`);
}

export const routers = [
  {
    name: 'Home',
    path: '/',
    redirect: { name: 'Dashboard' }
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: loadView('Dashboard'),
    meta: {
      breadcrumb: ['首頁', '分析報表']
    }
  },
  {
    name: 'Table',
    path: '/table',
    component: loadView('Table'),
    meta: {
      breadcrumb: ['首頁', '一般報表']
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/kkday_admin',
  routes: [
    {
      path: '',
      children: routers,
      component: {
        render: h => h('router-view')
      }
    }
  ]
});

export default router;
