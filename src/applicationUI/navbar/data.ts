import { NavItem } from "./interface";

export const NAV_ITEMS: Array<NavItem> = [

  {
    label: 'Tables',
    children: [
      {
        label: 'Table 1',
        subLabel: 'Two-column table with constant offset',
        href: '/first-page',
      },
      {
        label: 'Table 2',
        subLabel: 'Two-column table with multiplication factor',
        href: '/second-page',
      },
      {
        label: 'Table 3',
        subLabel: 'Table with all features combined',
        href: '/third-page',
      },
    ],
  },
];