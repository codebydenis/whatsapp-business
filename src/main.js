import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import router from './router';
import App from './App.vue';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const pinia = createPinia();
const vuetify = createVuetify({
	components,
	directives,
});

createApp(App).use(pinia).use(vuetify).use(router).mount('#app');
