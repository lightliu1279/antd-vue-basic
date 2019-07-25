function loadView(view) {
  return () => import(`@/views/${view}`);
}

export const routers = [
  {
    name: 'index',
    path: '',
    redirect: { name: 'MyAccount' },
    meta: {
      title: 'Home'
    },
    component: () => import('@/components/layout'),
    children: [
      {
        name: 'MyAccount',
        path: '/MyAccount',
        component: loadView('MyAccount'),
        meta: {
          title: 'My Account',
          breadcrumb: [
            { label: 'My Account' }
          ]
        }
      },
      {
        name: 'Table',
        path: '/prototype/table',
        component: loadView('prototype/Table'),
        meta: {
          title: 'Table',
          breadcrumb: [
            { label: 'Prototype' },
            { label: 'Table' }
          ]
        }
      },
      {
        name: 'Button',
        path: '/prototype/Button',
        component: loadView('prototype/Button'),
        meta: {
          title: 'Button',
          breadcrumb: [
            { label: 'Prototype' },
            { label: 'Button' }
          ]
        }
      },
      {
        name: 'List',
        path: '/products',
        component: loadView('products/List'),
        meta: {
          title: 'Products',
          breadcrumb: [
            { label: 'Products' }
          ]
        }
      },
      {
        name: 'CaseListAdmin',
        path: '/cases-admin',
        component: loadView('case/ListAdmin'),
        meta: {
          title: 'Cases',
          breadcrumb: [
            { label: 'Cases' }
          ]
        }
      },
      {
        name: 'CaseListOther',
        path: '/cases-others',
        component: loadView('case/ListOther'),
        meta: {
          title: 'Cases',
          breadcrumb: [
            { label: 'Cases' }
          ]
        }
      },
      {
        name: 'CaseAssignment',
        path: '/cases/assignment',
        component: loadView('case/Assignment'),
        meta: {
          title: 'Cases Assignment',
          breadcrumb: [
            { label: 'Assignment' }
          ]
        }
      },
      {
        name: 'Editing',
        path: '/products/:oid',
        component: loadView('products/Editing'),
        meta: {
          title: 'Editing',
          breadcrumb: [
            {
              label: 'Products',
              route: {
                name: 'List'
              }
            },
            { label: params => params.oid || 'undefined' }
          ]
        }
      },
      {
        name: 'Not Found',
        path: '/404',
        hidden: true,
        meta: {
          title: 'Not Found'
        },
        component: loadView('exception/404')
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: 'Login'
    },
    component: loadView('user/Login')
  },
  {
    path: '*',
    redirect: '/404'
  }
];
