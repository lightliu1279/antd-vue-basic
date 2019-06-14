function loadView(view) {
  return () => import(`@/views/${view}`);
}

export const routers = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: loadView('Dashboard'),
    meta: {
      icon: 'dashboard',
      title: '分析頁'
    }
  },
  {
    name: 'Prototype',
    path: '/prototype',
    redirect: { name: 'Table' },
    component: {
      render: h => h('router-view')
    },
    meta: {
      title: 'Prototype',
      icon: 'gold'
    },
    children: [
      {
        name: 'Table',
        path: '/prototype/table',
        component: loadView('prototype/Table'),
        meta: {
          title: '表格'
        }
      },
      {
        name: 'Button',
        path: '/prototype/button',
        component: loadView('prototype/Button'),
        meta: {
          title: '按鈕'
        }
      }
    ]
  }
];
