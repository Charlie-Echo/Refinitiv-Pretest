import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})