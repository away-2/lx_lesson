import {
	createRouter,
	createWebHistory
} from 'vue-router'

const routes = [{
	path: '/',
	redirect: '/page/home',
}, {
	path: '/page',
	name: 'Page',
	component: () => import('../views/Page.vue'),
	children: [{
			path: 'home',
			name: 'Home',
			component: () => import('../views/pages/home.vue')
		},
		{
			path: 'user',
			name: 'User',
			component: () => import('../views/pages/user.vue')
		}
	]
}]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router