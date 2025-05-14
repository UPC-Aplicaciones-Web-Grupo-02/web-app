import { createRouter, createWebHistory } from 'vue-router'


import ScooterDetails from '../scooter-review/components/ScooterDetails.component.vue'
import ScooterEdit from '../scooter-review/components/ScooterEdit.component.vue'
import ScooterReviews from '../scooter-review/components/ScooterReviews.component.vue'
import ScooterList from '../scooter-review/components/ScooterList.component.vue'

const routes = [
    {
        path: '/',
        redirect: '/scooters'
    },
    {
        path: '/scooters',
        name: 'ScooterList',
        component: ScooterList
    },
    {
        path: '/scooters/:id',
        name: 'ScooterDetails',
        component: ScooterDetails,
        props: true
    },
    {
        path: '/scooters/:id/reviews',
        name: 'ScooterReviews',
        component: ScooterReviews,
        props: true
    },
    {
        path: '/scooters/:id/edit',
        name: 'EditScooter',
        component: ScooterEdit,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
