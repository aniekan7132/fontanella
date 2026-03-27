import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { Path } from './path';

export const nav_menu = [
  {
    title: 'solutions',
    submenu: {
      columns: '3',
      options: [
        {
          title: 'Identity Verification APIs',
          menuItems: [
            {
              name: 'NIN Verification',
              path: '#',
            },
            {
              name: 'BVN Verification',
              path: '#',
            },
            {
              name: 'Driver’s License Check',
              path: '#',
            },
            {
              name: 'Company Search',
              path: '#',
            },
          ],
        },
        {
          title: 'Industries',
          menuItems: [
            {
              name: 'Fintech & Banking',
              path: '#',
            },
            {
              name: 'E-commerce & Payments',
              path: '#',
            },
            {
              name: 'Government & Compliance',
              path: '#',
            },
            {
              name: 'Telecom & Insurance',
              path: '#',
            },
          ],
        },
        {
          title: 'For Developers',
          menuItems: [
            {
              path: '#',
              name: 'API Documentation',
            },
            {
              path: '#',
              name: 'Integration Guides',
            },
            {
              path: '#',
              name: 'Sandbox & Testing',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'company',
    submenu: {
      columns: '1',
      options: [
        {
          title: 'Company',
          menuItems: [
            {
              name: 'About Us',
              path: '#',
            },
            {
              name: 'Our Story',
              path: '#',
            },
            {
              name: 'Security & Compliance',
              path: '#',
            },
          ],
        },
      ],
    },
  },
  {
    title: 'pricing',
    path: Path.pricing,
  },
  {
    title: 'resources',
    submenu: {
      columns: '1',
      options: [
        {
          title: 'Resources',
          menuItems: [
            {
              name: 'Blog',
              path: '#',
            },
            {
              name: 'Help Center',
              path: '#',
            },
          ],
        },
      ],
    },
  },
];

export const footer_info = {
  title: 'What is OneVerify?',
  information: 'Secure identity verification for the digital age.',
  socials: [
    {icon: FaFacebookF, path: '#', name: 'Facebook'},
    {icon: FaXTwitter, path: '#', name: 'Twitter'},
    {icon: LuYoutube, path: '#', name: 'YouTube'},
    {icon: FaMediumM, path: '#', name: 'Medium'},
  ],
  products: [
    {label: 'Features', path: '#'},
    {label: 'Pricing', path: '#'},
    {label: 'Integrations', path: '#'},
    {label: 'API', path: '#'},
  ],
  resources: [
    {label: 'Documentation', path: '#'},
    {label: 'Blog', path: '#'},
    {label: 'Support', path: '#'},
  ],
  company: [
    {label: 'About Us', path: '#'},
    {label: 'Careers', path: '#'},
    {label: 'Contact', path: '#'},
    {label: 'Partners', path: '#'},
  ]
};
