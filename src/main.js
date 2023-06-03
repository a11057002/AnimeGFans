import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import store from './vuex/store'
import cookie from 'vue-cookie'


Vue.config.productionTip = false
Vue.use(require('vue-script2'))

Vue.use(cookie)

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
