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
    name: 'List',
    path: '/list',
    redirect: { name: 'BasicTable' },
    component: {
      render: h => h('router-view')
    },
    meta: {
      title: '列表頁',
      icon: 'table'
    },
    children: [
      {
        name: 'BasicTable',
        path: '/list/basic-table',
        component: loadView('table/BasicTable'),
        meta: {
          title: '一般列表'
        }
      },
      {
        name: 'SearchTable',
        path: '/list/search-table',
        component: loadView('table/SearchTable'),
        meta: {
          title: '搜尋列表'
        }
      }
    ]
  }
];
