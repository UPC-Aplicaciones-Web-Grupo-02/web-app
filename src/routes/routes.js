import { createRouter, createWebHistory } from "vue-router";

import RegisterForm from "../../../miteresitaolivera/src/movix/profile-management/component/registerUser.component.vue";
import LoginForm from "../../../miteresitaolivera/src/movix/profile-management/component/loginUser.component.vue";
import UserEditor from "../../../miteresitaolivera/src/movix/profile-management/component/editorUser.component.vue";
import Profile from "../../../miteresitaolivera/src/movix/profile-management/component/viewUser.component.vue";
import NotFound from "../../../miteresitaolivera/src/shared/components/notFound.component.vue";
import Main from "../../../miteresitaolivera/src/layouts/components/movixMain.component.vue";

const routes = [
  { path: "/", component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/login', component: LoginForm },
  {
    path: '/main', component: Main,

    children: [
      { path: '/profile', component: Profile },
      {path: '/editor', component: UserEditor},

    ]
  },
  { path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
