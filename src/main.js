import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import fontawesome from '@/plugins/fontawesome';

createApp(App)
    .use(store)
    .use(router)
    .use(fontawesome)
    .mount('#app');
