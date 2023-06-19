import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
    
})

export default router