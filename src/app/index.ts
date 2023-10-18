import { createApp, provide, h, watch } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import Antd from 'ant-design-vue';

import { router, store, apolloClient } from './providers';
import { storeUser } from '@/entities/session';
import { i18n } from '@/shared/lib/localization';
import App from './index.vue';

export const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(i18n)
  .use(router)
  .use(store)
  .use(Antd);

watch(
  store.state,
  (state) => {
    storeUser(state.session.user);
  },
  { deep: true },
);
