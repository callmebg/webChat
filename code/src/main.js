import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/main.css'

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
