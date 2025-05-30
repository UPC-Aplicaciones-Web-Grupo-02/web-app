import { createRouter, createWebHistory } from 'vue-router'

import RegisterComponent from "@/movix/profile-management/component/register.component.vue";
import LoginComponent from "@/movix/profile-management/component/login.component.vue";
import UserEditor from "@/movix/profile-management/component/editorUser.component.vue";
import Profile from "@/movix/profile-management/component/viewUser.component.vue";
import NotFound from "@/shared/components/notFound.component.vue";

// Ney
import SubscriptionsPage from '@/movix/subscriptions/views/SubscriptionsPage.vue';
import SubscriptionCurrent from '@/movix/subscriptions/components/SubscriptionCurrent.vue';

// Sebastian
import AddScooter from "@/movix/scooter-management/components/scooter-add.component.vue";
import viewScooter from "@/movix/scooter-management/components/scooter-item.component.vue";
import listScooter from "@/movix/scooter-management/components/scooter-list.component.vue"

// Alonso
import ScooterHistoryComponent from "@/movix/ScooterHistory/components/page.component.vue";
import ScooterDetails from  "@/movix/ScooterHistory/components/scooter-details.components.vue";

// Rafael
import ScooterDetailss from '@/movix/scooter-review/components/ScooterDetails.component.vue';
import ScooterEdit from '@/movix/scooter-review/components/ScooterEdit.component.vue';
import ScooterReviews from '@/movix/scooter-review/components/ScooterReviews.component.vue';
import ScooterList from '@/movix/scooter-review/components/ScooterList.component.vue';

import Main from "@/layouts/components/movixMain.component.vue";

const routes = [
  { path: "/", component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/login', component: LoginComponent },
  {
    path: '/main', component: Main,
    children: [
      { path: '/profile', component: Profile  },
      { path: '/editor', component: UserEditor},
      // Arnold
      { path: '/suscriptions', component: SubscriptionsPage },
      { path: '/mi-suscripcion', component: SubscriptionCurrent },
      // Sebastian
      { path: '/scooter', component: AddScooter},
      { path: '/detalle', component: viewScooter},
      { path: '/create', component: listScooter},
      // Alonso
      { path: '/history', component: ScooterHistoryComponent },
      { path: '/details', component: ScooterDetails },
      //Rafael
      { path: '/scooters', name: 'ScooterList', component: ScooterList },
      { path: '/scooters/:id', name: 'ScooterDetailss', component: ScooterDetailss, props: true },
      { path: '/scooters/:id/reviews', name: 'ScooterReviews', component: ScooterReviews, props: true },
      { path: '/scooters/:id/edit', name: 'EditScooter', component: ScooterEdit, props: true }
    ]
  },
  { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
