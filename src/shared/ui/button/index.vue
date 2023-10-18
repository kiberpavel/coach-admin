<script setup lang="ts">
import './styles.scss';

interface Props {
  type?: string;
  htmlType?: string;
  isPrimary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  htmlType: 'button',
  isPrimary: false,
  disabled: false,
});
</script>

<template>
  <a-button
    :class="{ 'primary-button': isPrimary }"
    :type="type"
    :html-type="htmlType"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </a-button>
</template>
