import { createApp } from 'vue';
import 'flowbite';

import App from './App.vue';
import router from './router';
import { nextTick } from 'vue';
import { DEFAULT_TITLE } from './helpers/Constants';
import store from './store';

const app = createApp(App);

// set title as per current route
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = DEFAULT_TITLE + ' | ' + to.meta.title || DEFAULT_TITLE;
  });
});

app.use(router);
app.use(store);

app.mount('#app');
