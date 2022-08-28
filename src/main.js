import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('my-button', require('@/components/UI/MyButton.vue').default)
window.Vue = require('vue')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
