<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';

import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  fullName: string;
  collapsed: boolean;
}

defineProps<Props>();

const { t } = useTranslation();
</script>

<template>
  <div class="user-info-wrapper">
    <a-avatar :size="{ xxl: 50, xl: 50, lg: 50, md: 50, sm: collapsed ? 30 : 50 }" alt="avatar">
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
    <div :class="[collapsed ? 'hidden' : 'user-info-wrapper-content']">
      <span>{{ t('admin.title') }}</span>
      <p class="user-info-wrapper-content-name">{{ fullName }}</p>
    </div>
  </div>
</template>
