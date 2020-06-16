import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.prototype.$BaseUrl = 'http://192.168.1.119:8088/uajax';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
