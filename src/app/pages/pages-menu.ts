import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Chat',
    icon: 'message-circle-outline',
    link: '/chat',
  },
  {
    title: 'Usuários',
    icon: 'person-outline',
    link: '/users'
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Users',
    icon: 'person-outline',
    children: [
      {
        title: 'Register',
        icon: 'person-add-outline',
        link: '/users/register',
      },
      {
        title: 'List',
        icon: 'people-outline',
        link: '/users/list',
      }
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
