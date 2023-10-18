<script setup lang="ts">
import { Form } from 'vee-validate';
import { notification } from 'ant-design-vue';

import { router } from '@/app/providers';
import { useTranslation } from '@/shared/lib/localization';
import type { SignInUserVariables } from '@/shared/api/auth';
import CustomButton from '@/shared/ui/button';
import CustomInput from '@/shared/ui/input';
import { EmailIcon, PasswordIcon } from '@/shared/ui/icons';
import { validationSchema } from '../config';
import { useSignIn } from '../lib';
import './styles.scss';

const { t } = useTranslation();

const { loading, signIn } = useSignIn();

const handleLogin = async (loginData: SignInUserVariables) => {
  await signIn(loginData)
    .then(() => {
      router.push('/');
    })
    .catch(() => {
      notification.error({
        message: t('notifications.unauthorized.message'),
        description: t('notifications.unauthorized.description'),
      });
    });
};
</script>

<template>
  <section class="login-wrap-form">
    <h1 class="login-wrap-form-title">{{ t('login.title') }}</h1>
    <Form @submit="handleLogin" :validation-schema="validationSchema">
      <CustomInput
        type="text"
        name="email"
        :placeholder="t('login.emailPlaceholder')"
        :label="t('login.emailLabel')"
      >
        <template v-slot:icon>
          <EmailIcon class="input-icon" />
        </template>
      </CustomInput>
      <CustomInput
        type="password"
        name="password"
        :placeholder="t('login.passwordPlaceholder')"
        :label="t('login.passwordLabel')"
      >
        <template v-slot:icon>
          <PasswordIcon class="input-icon" />
        </template>
      </CustomInput>
      <a-form-item :wrapper-col="{ offset: 9, span: 18 }">
        <CustomButton htmlType="submit" :isPrimary="true" :disabled="loading.value">
          {{ t('login.title') }}
        </CustomButton>
      </a-form-item>
    </Form>
  </section>
</template>
