import Vue from 'vue'
import App from './App.vue'
import SideBar from './Components/SideBar/SideBar.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { store } from './store/store'
import CKEditor from 'ckeditor4-vue';



Vue.component('side-bar', SideBar);
Vue.use(VueRouter);
Vue.use( CKEditor );


const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


