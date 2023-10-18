<script setup lang="ts">
import { useTranslation } from '@/shared/lib/localization';

const { t } = useTranslation();
</script>

<template>
  <h1>{{ t('exercises.title') }}</h1>
</template>
