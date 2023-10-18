<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

import { useTranslation } from '@/shared/lib/localization';
import './styles.scss';

interface Props {
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  value: '',
});

const { t } = useTranslation();

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage: errorKey,
  handleChange,
  setTouched,
  handleBlur,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <a-form-item :label="label" :name="name" class="label">
    <slot name="icon" />
    <a-input
      :name="name"
      :id="name"
      :type="type"
      class="input"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      @focus="() => setTouched(false)"
    >
    </a-input>
    <span v-if="errorKey && meta.touched" class="input-error">{{ t(errorKey) }}</span>
  </a-form-item>
</template>
