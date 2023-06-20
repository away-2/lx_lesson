import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: '登录'
        
    },
    {
        path: '/page',
        name: 'Page',
        component: () => import('@/views/Page.vue'),
        meta:  '首页',
        children: [
                    {
                        path: '',
                        redirect:'/page/home',
                    }
                ],
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/pages/Home.vue'),
                
            },
            {
                path: 'data',
                name: 'Data',
                component: () => import('@/views/pages/Data.vue'),
                
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/pages/User.vue'),
                
            },
    ],
    },

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
    
})

export default router