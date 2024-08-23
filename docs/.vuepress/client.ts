import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

export default defineClientConfig({
  layouts: {
  },
  enhance({ router }) {
    router.beforeEach((to) => {
      console.log('before navigation');
    });

    router.afterEach((to) => {
      console.log('after navigation');
    });
  },
  setup() {
    onMounted(() => {
      // 在 mounted 之后使用 DOM API
      document.querySelector('#app');
    });
  },
  rootComponents: []
});
