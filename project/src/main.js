import Vue from 'vue'
import App from './App.vue'
import SideBar from './Components/SideBar/SideBar.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import { store } from './store/store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.component('side-bar', SideBar);
Vue.use(VueRouter);
Vue.use(mavonEditor)
Vue.use(ElementUI);



const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


