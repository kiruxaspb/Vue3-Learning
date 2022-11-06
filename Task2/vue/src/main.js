import { createApp } from 'vue'
import { store } from './store.js'
import App from './App.vue'

const application = createApp(App);
application.use(store);
application.mount('#app');
