import MainLayout from '@/layouts/main-layout.component.vue'
import SubscriptionsPage from '@/movix/subscriptions/views/SubscriptionsPage.vue'
import SubscriptionCurrent from '@/movix/subscriptions/components/SubscriptionCurrent.vue'

const EmptyView = { template: '<div></div>' }
export const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/suscripciones' },
      { path: 'profile', component: EmptyView },
      { path: 'suscripciones', component: SubscriptionsPage },
      { path: 'mi-suscripcion', component: SubscriptionCurrent },
      { path: 'ruta3', component: EmptyView },
      { path: 'ruta4', component: EmptyView },
      { path: 'logout', component: EmptyView }
    ]
  }
]
