<script setup lang="ts">
import { Header } from '@/widgets/header';
import { LoginForm } from '@/widgets/login';
import './styles.scss';
</script>

<template>
  <Header />
  <a-layout-content>
    <div class="login-wrap">
      <div class="login-wrap-logo">
        <img src="./assets/images/logo.png" alt="logo" />
      </div>
      <LoginForm />
    </div>
  </a-layout-content>
</template>
