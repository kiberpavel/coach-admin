<script setup lang="ts">
import './styles.scss';

interface Props {
  type?: string;
  htmlType?: string;
  disabled?: boolean;
  onClick?: () => void;
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  htmlType: 'button',
  disabled: false,
});
</script>

<template>
  <a-button
    class="button-with-icon"
    :type="type"
    :html-type="htmlType"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon" />
  </a-button>
</template>
