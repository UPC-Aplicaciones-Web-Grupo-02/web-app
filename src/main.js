import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router/router.js';
import 'primeicons/primeicons.css'
import i18n from './traslate/i18n.js'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Select from 'primevue/select';
import Card from 'primevue/card';
import {Toolbar} from "primevue";



const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

// Register components
app.component('pv-button', Button);
app.component('pv-inputtext', InputText);
app.component('pv-floatlabel', FloatLabel);
app.component('pv-select', Select);
app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);

app.use(i18n);
app.use(router);
app.mount('#app')
