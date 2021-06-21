// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Display from '@/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import animated from 'animate.css'

Vue.use(animated)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.display=Display //vue是一个构造函数 可以预想vue这个函数内部必然有this  然后通过new 就成了构造函数 
//通过构造函数的原型 可以让用vue这个构造函数创建的不同实例间共享属性  每个组件就是创建的不同实例 所以实现了全局变

axios.defaults.withCredentials=true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
