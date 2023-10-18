<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { SelectLanguage } from '@/features/change-language';
import { ChangeTheme } from '@/features/change-theme';
import { SignOut } from '@/features/sign-out';
import { useTranslation } from '@/shared/lib/localization';
import { Routes } from '@/shared/config/routes';
import './styles.scss';

const { t } = useTranslation();

const titleName = computed<string>(() => {
  switch (useRoute().path) {
    case Routes.exercises:
      return t('exercises.title');
    case Routes.workouts:
      return t('workouts.title');
    case Routes.users:
      return t('users.title');
    default:
      return 'MyCoach';
  }
});
</script>

<template>
  <a-layout-header class="p-0">
    <div class="header-wrapper">
      <a-page-header class="p-0" :title="titleName" />
      <div class="header-wrapper-content">
        <SelectLanguage />
        <ChangeTheme />
        <SignOut />
      </div>
    </div>
  </a-layout-header>
</template>
