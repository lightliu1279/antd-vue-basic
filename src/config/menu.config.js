// structure of side bar
const menuMap = [
  {
    label: 'My Account',
    index: 1,
    icon: 'user',
    route: { name: 'MyAccount' }
  },
  {
    label: 'Products',
    index: 2,
    icon: 'gold',
    children: [
      {
        label: 'List',
        route: { name: 'List' }
      }
    ]
  },
  {
    label: 'Case',
    index: 3,
    icon: 'audit',
    children: [
      {
        label: 'List',
        route: { name: 'CaseList' }
      },
      // {
      //   label: 'Case List (F&V)',
      //   route: { name: 'CaseListOther' }
      // },
      {
        label: 'Case Assignment',
        route: { name: 'CaseAssignment' }
      }
    ]
  },
  {
    label: 'Prototype',
    index: 4,
    icon: 'tool',
    children: [
      {
        label: 'Button',
        route: { name: 'Button' }
      },
      {
        label: 'Table',
        route: { name: 'Table' }
      }
    ]
  }
];
export default menuMap;
