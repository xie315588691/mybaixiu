import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './assets/css/admin.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
