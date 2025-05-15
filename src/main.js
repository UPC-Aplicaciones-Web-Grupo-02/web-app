import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import i18n from './traslate/i18n.js'
import router from "./routes/routes.js";

import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import Avatar from 'primevue/avatar';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import DataView from 'primevue/dataview';
import SelectButton from 'primevue/selectbutton';
import Chip from 'primevue/chip';
import Card from 'primevue/card';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";
import Select from "primevue/select";
import InputNumber from "primevue/inputnumber";
import Accordion from "primevue/accordion";
import Accordiontab from "primevue/accordiontab";
import Rating from "primevue/rating";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(router)
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-avatar', Avatar);
app.component('pv-carousel', Carousel);
app.component('pv-tag', Tag);
app.component('pv-dataview', DataView);
app.component('pv-selectbutton', SelectButton);
app.component('pv-chip', Chip);
app.component('pv-card', Card);
app.component('pv-iconfield', IconField);
app.component('pv-inputicon', InputIcon);
app.component('pv-checkbox', Checkbox);
app.component('pv-inputtext', InputText);
app.component('pv-divider', Divider);
app.component('pv-floatlabel', FloatLabel);
app.component('pv-password', Password);
app.component('pv-dropdown', Dropdown);
app.component('pv-dialog', Dialog);
app.component('pv-select', Select);
app.component('pv-inputnumber', InputNumber);
app.component('pv-accordion', Accordion);
app.component('pv-accordiontab', Accordiontab);
app.component('pv-rating', Rating);
app.use(i18n)
app.use(router)
app.mount('#app')
