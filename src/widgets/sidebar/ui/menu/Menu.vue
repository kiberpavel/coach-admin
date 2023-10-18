<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { useTranslation } from '@/shared/lib/localization';
import { menuOptions } from './config';
import './styles.scss';

const { t } = useTranslation();

const { path } = useRoute();

const selectedKeys = ref<string[]>([path]);
</script>

<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
    <a-menu-item v-for="{ route, transKey, icon } of menuOptions" :key="route" id="menu-item">
      <router-link :to="route" class="menu-item-route">
        <component :is="icon" class="menu-item-icon" />
        <span class="menu-item-text">{{ t(`${transKey}.title`) }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
