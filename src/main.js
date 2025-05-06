import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from './primevue.js'
//import 'primeflex/primeflex.css';

const app = createApp(App);

PrimeVue(app);

app.mount('#app');
