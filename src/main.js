import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.config.productionTip = false
Vue.use(VueCoreVideoPlayer)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')