export const MENU = [
  {
    name: 'submit',
    label: 'Test1',
    icon: 'form',
    children: [
      {
        name: '/submit/event',
        label: 'Event Submit',
        menu: true,
      },
      {
        name: '/submit/project',
        label: 'Project Submit',
        menu: true,
      },
    ],
  },
  {
    name: 'mgt',
    label: 'Test2',
    icon: 'solution',
    children: [
      {
        name: '/mgt/event',
        label: 'test1',
        menu: true,
      },
      {
        name: '/mgt/project',
        label: 'test2',
        menu: true,
      },
    ],
  },
];

export default {};
