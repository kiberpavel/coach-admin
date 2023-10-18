<script setup lang="ts">
import { LanguageIcon } from '@/shared/ui/icons';
import { languageOptions } from '../config';
import { useLanguage } from '../lib';
import './styles.scss';

const { language, changeLanguage } = useLanguage();
</script>

<template>
  <a-space>
    <a-select
      v-model:value="language"
      :options="languageOptions"
      @change="changeLanguage"
      :bordered="false"
      :dropdownMatchSelectWidth="false"
    >
      <template #suffixIcon>
        <LanguageIcon class="select-lang-icon" />
        <sup class="select-language">{{ language }}</sup>
      </template>
    </a-select>
  </a-space>
</template>
