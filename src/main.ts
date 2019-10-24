import './decorator/class-component-hooks'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'config/index'
import server from './utils/https'

Vue.prototype.$https = server

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
