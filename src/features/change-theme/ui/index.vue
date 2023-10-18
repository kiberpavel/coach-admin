<script setup lang="ts">
import { MoonIcon, SunIcon } from '@/shared/ui/icons';
import { useTheme } from '../lib';
import './styles.scss';

const { isDarkTheme, changeTheme } = useTheme();
</script>

<template>
  <div class="change-theme">
    <a-switch
      class="bg-gray-100 dark:bg-gray-400"
      v-model:checked="isDarkTheme"
      @change="changeTheme()"
    >
      <template #checkedChildren><SunIcon class="change-theme-icon" /></template>
      <template #unCheckedChildren><MoonIcon class="change-theme-icon" /></template>
    </a-switch>
  </div>
</template>
