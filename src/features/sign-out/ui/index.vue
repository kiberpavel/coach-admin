<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useSessionStore } from '@/entities/session';
import { Routes } from '@/shared/config/routes';
import IconButton from '@/shared/ui/icon-button';
import { useSignOut } from '../lib';
import { LogoutIcon } from '@/shared/ui/icons';
import './styles.scss';

const sessionStore = useSessionStore();

const { isSignedIn } = storeToRefs(sessionStore);

const router = useRouter();

const handleLogout = async () => {
  await useSignOut().then(() => {
    router.push(Routes.login);
  });
};
</script>

<template>
  <IconButton v-if="isSignedIn" :onClick="handleLogout">
    <template v-slot:icon>
      <LogoutIcon class="logout-icon" />
    </template>
  </IconButton>
</template>
