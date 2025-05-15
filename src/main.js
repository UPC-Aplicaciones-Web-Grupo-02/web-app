import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import PrimeVue from './primevue.js'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(i18n)
app.mount('#app')
