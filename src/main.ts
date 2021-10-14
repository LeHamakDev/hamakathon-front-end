import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
require('@/assets/main.scss');
import { VueCookieNext } from 'vue-cookie-next'


createApp(App).use(store).use(VueCookieNext).use(router).mount('#app')
