import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TopCard from '@/components/TopCard'
import zpgc1 from '@/components/zpgc1'
import zpgc2 from '@/components/zpgc2'  
import zpgw from '@/components/zpgw'
import xyjf from '@/components/xyjf'
import gly from '@/components/gly'
import adduser from '@/components/AddUser' 
import wjxd1 from '@/components/wjxd1'
import wjxd2 from '@/components/wjxd2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Top',
      name: 'TopCard',
      component: TopCard
    },
    {
      path: '/zpgw',
      name: 'zpgw',
      component: zpgw
    },
    {
      path: '/zpgc1',
      name: 'zpgc1',
      component: zpgc1
    },
    {
      path: '/zpgc2',
      name: 'zpgc2',
      component: zpgc2
    },
    {
      path: '/xyjf',
      name: 'xyjf',
      component: xyjf
    },
    {
      path: '/gly',
      name: 'gly',
      component: gly 
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: adduser 
    },
    {
      path: '/wjxd1',
      name: 'wjxd1',
      component: wjxd1
    },
    {
      path: '/wjxd2',
      name: 'wjxd2',
      component: wjxd2
    },
  ]
})
