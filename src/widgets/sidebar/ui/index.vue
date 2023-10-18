<script setup lang="ts">
import { ref } from 'vue';

import { useSessionStore } from '@/entities/session';
import { UserInfo } from './user-info';
import { Menu } from './menu';
import './styles.scss';

const { user } = useSessionStore();

const fullName = ref<string>(user?.fullName || '');

const collapsed = ref<boolean>(false);
</script>

<template>
  <a-layout-sider
    width="255"
    collapsedWidth="70"
    v-model:collapsed="collapsed"
    collapsible
    breakpoint="md"
  >
    <UserInfo :fullName="fullName" :collapsed="collapsed" />
    <Menu />
  </a-layout-sider>
</template>
