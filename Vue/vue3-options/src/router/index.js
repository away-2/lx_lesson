import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router