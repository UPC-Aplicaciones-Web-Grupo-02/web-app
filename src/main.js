import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from './primevue.js'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import router from './routes/route.js'

import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select';

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-inputText', InputText)
app.component('pv-inputNumber', InputNumber)
app.component('pv-select', Select)

app.mount('#app');
