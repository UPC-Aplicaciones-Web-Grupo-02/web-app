import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from './primevue.js'
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import {Button, Card, Toolbar, InputText, InputNumber, Dialog} from "primevue";


const app = createApp(App);
app
  .use(PrimeVue, {ripple: true, theme: {preset:Aura}})
  .component('pv-button', Button)
  .component('pv-card', Card)
  .component('pv-toolbar', Toolbar)
  .component('pv-inputtext', InputText)
  .component('pv-inputnumber', InputNumber)
  .component('pv-dialog', Dialog)
  .mount('#app')

