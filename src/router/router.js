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
		component: () => import('@/views/Video.vue'), 
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
	},
	{
		path:'/signup',
		name: 'Signup',
		component: () => import('@/views/SignUp.vue')
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import('@/views/Test.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	}
]

const router = new VueRouter({
	// mode: 'history',
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const token = getCookie('token');
	if (to.meta.title) {
		document.title = to.meta.title
	}
	if (to.matched.some((record) => record.meta.requiresAuth) && token == null) {
		document.next = to
		document.title = '登入'
		next('/login')
		return
	}
	if(token && document.next != null){
		let temp = document.next.path
		document.next = null
		next(temp)
		return
	}
	
	if (token && (to.path == '/' || to.path == '/login')) {
		next('/home')
		return
	}
	
	next()
})

const getCookie = (name)=>{
	var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// router.beforeEach((to, from, next) => {
// 	const loggedIn = localStorage.getItem('user')
// 	if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
// 		next('/')
// 	}
// 	if (to.meta.title) {
// 		document.title = to.meta.title
// 	}
// 	next()
// })

export default router
