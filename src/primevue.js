import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


import Button from 'primevue/button';
import Card from 'primevue/card';

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  });

  app.component('pv-Button', Button);
  app.component('pv-Card', Card);
}
