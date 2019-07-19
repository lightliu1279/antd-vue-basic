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
    label: 'Prototype',
    index: 3,
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
