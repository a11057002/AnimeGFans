import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home.vue'),
		meta: {
			title: '在線動漫-AnimeGFans',
			requiresAuth: true
		}
	},
	{
		path: '/page/:page',
		name: 'About',
		component: () => import('@/views/Home.vue'),
		props: true,
		meta: {
			title: 'AnimeGFans'
		}
	},
	{
		path: '/video/:id',
		name: 'Video',
		component: () => import('@/components/Video.vue'),
		props: true,
		meta: {
			title: '影片播放',
			requiresAuth: true
		}
	},
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login.vue'),
		meta: {
			title: '登入'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const loggedIn = localStorage.getItem('user')
	if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
		next('/')
	}
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

export default router
