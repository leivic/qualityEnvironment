import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navagationbar from '@/components/Navagationbar'
import TopCard from '@/components/TopCard'
import zpgw from '@/components/zpgw' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Nav',
      name: 'Navagationbar',
      component: Navagationbar
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
    } 
  ]
})
