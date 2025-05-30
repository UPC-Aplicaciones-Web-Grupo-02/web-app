import { createRouter, createWebHistory } from 'vue-router'

import RegisterForm from "@/movix/profile-management/component/registerUser.component.vue";
import LoginForm from "@/movix/profile-management/component/loginUser.component.vue";
import UserEditor from "@/movix/profile-management/component/editorUser.component.vue";
import Profile from "@/movix/profile-management/component/viewUser.component.vue";
import NotFound from "@/shared/components/notFound.component.vue";
import ListScooterComponent from "@/movix/scooter-view/component/listScooter.component.vue";
import DetailsScooter from "@/movix/scooter-view/component/scooterDatails.component.vue";
import createScooter from "@/movix/scooter-view/component/createScooter.component.vue"
import SubscriptionsPage from '@/movix/subscriptions/views/SubscriptionsPage.vue'
import SubscriptionCurrent from '@/movix/subscriptions/components/SubscriptionCurrent.vue'
import AddScooter from "@/movix/scooter-management/components/scooter-add.component.vue";
import viewScooter from "@/movix/scooter-management/components/scooter-item.component.vue";
import listScooter from "@/movix/scooter-management/components/scooter-list.component.vue"


import Main from "@/layouts/components/movixMain.component.vue";

const routes = [
  { path: "/", component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/login', component: LoginForm },
  {
    path: '/main', component: Main,

    children: [
      { path: '/profile', component: Profile  },
      {path: '/editor', component: UserEditor},

      { path: '/suscriptions', component: SubscriptionsPage },
      { path: '/mi-suscripcion', component: SubscriptionCurrent },
      {path: '/scooter', component: ListScooterComponent},
      {path: '/detalle', component: DetailsScooter},
      {path: '/create', component: createScooter}
      {path: '/scooter', component: AddScooter},
      {path: '/detalle', component: viewScooter},
      {path: '/create', component: listScooter}
    ]
  },
  { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
