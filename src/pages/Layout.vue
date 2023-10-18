<script setup lang="ts">
import { Header } from '@/widgets/header';
import { SideBar } from '@/widgets/sidebar';
import './styles.scss';
</script>

<template>
  <a-layout class="layout">
    <SideBar />
    <a-layout>
      <Header />
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
