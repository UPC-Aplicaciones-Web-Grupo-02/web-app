import { createRouter, createWebHistory } from "vue-router";

import login from "../movix/iam/component/login.component.vue";
import view from "../movix/iam/component/view.component.vue";
import eliminarUser from "../movix/iam/component/delete.component.vue";
import createuser from "../movix/iam/component/create.component.vue";
import scooterList from "../movix/scooter-management/component/scooterList.component.vue";
import scooterDetail from "../movix/scooter-management/component/scooterDetalle.component.vue";
import ScooterAdminCreateComponent from "../movix/scooter-management/component/scooterAdminCreate.component.vue";
import ScooterAdminList from "../movix/scooter-management/component/scooterAdminList.component.vue";
import ScooterAdminDetalle from "../movix/scooter-management/component/scooterAdminDetalle.component.vue";
import suscriptionDetalle from "../movix/suscription/component/suscriptionDetalle.component.vue";
import main from "../layouts/main.component.vue";
import createSuscription from "../movix/suscription/component/suscription.component.vue";
import reservation from "../movix/reservation/component/reservation.component.vue";
import histories from "../movix/reservation/component/histories.component.vue";
import NotFound from "../shared/pages/NotFound.component.vue";

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: login },
    { path: "/register", component: createuser },
    {
        path: "/",
        component: main,
        children: [
            { path: "view", component: view },
            { path: "delete", component: eliminarUser },

            { path: "scooter", component: scooterList },
            { path: "scooter/:id", component: scooterDetail },


            { path: "admin/create", component: ScooterAdminCreateComponent },
            { path: "admin/list", component: ScooterAdminList },
            { path: "admin/detalle/:id", component: ScooterAdminDetalle },

            { path: "suscription", component: suscriptionDetalle },
            { path: "newsuscription", component: createSuscription },

            { path: "reservation", component: reservation },
            { path: "histories", component: histories },
        ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = !!localStorage.getItem('userId');

    if (authRequired && !loggedIn) {
        return next('/login');
    }
    next();
});

export default router;