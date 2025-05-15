import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


import Button from 'primevue/button';
import Card from 'primevue/card';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  });

  app.component('pv-button', Button);
  app.component('pv-card', Card);
  app.component('pv-floatlabel', FloatLabel);
  app.component('pv-inputtext', InputText);
  app.component('pv-dropdown', Dropdown);
}
