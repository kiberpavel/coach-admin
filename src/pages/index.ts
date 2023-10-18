import Routing from './index.vue';
import Layout from './Layout.vue';
import { Routes } from '@/shared/config/routes';

export const routes = [
  {
    path: '/',
    redirect: Routes.exercises,
    component: Layout,
    meta: {
      isAuthorized: true,
    },
    children: [
      { path: Routes.exercises, component: () => import('./exercises') },
      { path: Routes.workouts, component: () => import('./workouts') },
      { path: Routes.users, component: () => import('./users') },
    ],
  },
  {
    path: Routes.login,
    component: () => import('./login'),
    meta: {
      isAuthorized: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./not-found'),
    meta: {
      isAuthorized: true,
    },
  },
];

export { Routing };
