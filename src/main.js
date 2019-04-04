import Vue from 'vue'
import App from './App.vue'

// 导入路由实例
import router from './router'
// 导入仓库实例
import store from './store'

import axios from './axios'

Vue.prototype.$axios = axios;

// 注册全局过滤器
import './filters'

// 注册全局组件
import './components';

// 注册全局指令
import './directives'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
