import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TopCard from '@/components/TopCard'
import zpgc1 from '@/components/zpgc1'
import zpgc2 from '@/components/zpgc2'  
import zpgw from '@/components/zpgw'
import xyjf from '@/components/xyjf'
import gly from '@/components/gly' 
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
    }
  ]
})
