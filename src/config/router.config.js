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
        name: 'CaseList',
        path: '/cases',
        component: loadView('case/List'),
        meta: {
          title: 'Cases',
          breadcrumb: [
            { label: 'Cases' }
          ]
        }
      },
      {
        name: 'CaseAssignment',
        path: '/assignment',
        component: loadView('case/Assignment'),
        props: route => {
          const { productOid, targetLang } = route.params;
          return {
            productOid: Number(productOid) || undefined,
            targetLang
          };
        },
        meta: {
          title: 'Cases Assignment',
          breadcrumb: [
            { label: 'Assignment' }
          ]
        }
      },
      {
        name: 'CaseAssignmentReview',
        path: '/cases/:caseId',
        component: loadView('case/AssignmentReview'),
        props: true,
        meta: {
          title: 'Cases Assignment Review',
          breadcrumb: [
            {
              label: 'Cases',
              route: {
                name: 'CaseList'
              }
            },
            { label: params => params.caseId || 'undefined' }
          ]
        }
      },
      {
        name: 'Editing',
        path: '/products/:oid',
        component: loadView('products/Editing'),
        props: route => {
          const oid = route.params;
          return {
            oid: Number(oid) || undefined
          };
        },
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
