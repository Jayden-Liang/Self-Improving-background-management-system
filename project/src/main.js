import Vue from 'vue'
import App from './App.vue'
import SideBar from './Components/SideBar/SideBar.vue'
import VueRouter from 'vue-router'
import { routes } from './router'



Vue.component('side-bar', SideBar);
Vue.use(VueRouter);


const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


