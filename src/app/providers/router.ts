import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useSessionStore } from '@/entities/session';
import { Routes } from '@/shared/config/routes';
import { routes } from '@/pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const sessionStore = useSessionStore();

  const { isSignedIn } = storeToRefs(sessionStore);

  if (to.meta.isAuthorized) {
    if (!isSignedIn.value) {
      next(Routes.login);
    }
  } else {
    if (isSignedIn.value) {
      next('/');
    }
  }

  next();
});
