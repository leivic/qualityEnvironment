import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TopCard from '@/components/TopCard'
import zpgc1 from '@/components/zpgc1'
import zpgc2 from '@/components/zpgc2'
import gccc1 from '@/components/gccc1'
import gccc2 from '@/components/gccc2'    
import zpgw from '@/components/zpgw'
import xyjf from '@/components/xyjf'
import adminyhxx from '@/components/adminyhxx'
import adduser from '@/components/AddUser' 
import wjxd1 from '@/components/wjxd1'
import wjxd2 from '@/components/wjxd2'
import nav from '@/components/Nav'
import test from '@/components/test'
import glyzpgw from '@/components/admin/glyzpgw'
import gwcc from '@/components/gwcc'
import glygccc from '@/components/admin/glygccc'
import pageHelper from '@/components/util/pageHelper'
import gwzlstyszt from '@/components/gwzlstyszt'
import glygwzlstys from '@/components/admin/glygwstys'
import glybhd from '@/components/admin/glybhd'
import bhd from '@/components/bhd'
import glygwfhl from '@/components/admin/glygwfhl'
import gwfgl from '@/components/gwfgl'
import gwfgl2 from '@/components/gwfgl2'  
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
      path: '/adminyhxx',
      name: 'gly',
      component: adminyhxx
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
    {
      path: '/nnav',
      name: 'nnav',
      component: nav
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/glyzpgw',
      name: 'TopCard',
      component: glyzpgw
    },
    {
      path: '/gwcc',
      name: 'gwcc',
      component: gwcc
    },
    {
      path: '/glygccc',
      name: 'glygccc',
      component: glygccc
    },
    {
      path: '/pageHelper',
      name: 'pageHelper',
      component: pageHelper
    },
    {
      path: '/gccc1',
      name: 'gccc1',
      component: gccc1
    },
    {
      path: '/gccc2',
      name: 'gccc2',
      component: gccc2
    },
    {
      path: '/gwzlstyszt',
      name: 'gwzlstyszt',
      component: gwzlstyszt
    },
    {
      path: '/glygwzlstys',
      name: 'glygwzlstys',
      component: glygwzlstys
    },
    {
      path: '/glybhd',
      name: 'glybhd',
      component: glybhd
    },
    {
      path: '/bhd',
      name: 'bhd',
      component: bhd
    },
    {
      path: '/glygwfhl',
      name: 'glygwfhl',
      component: glygwfhl
    },
    {
      path: '/gwfgl',
      name: 'gwfgl',
      component: gwfgl
    },
    {
      path: '/gwfgl2',
      name: 'gwfgl2',
      component: gwfgl2
    },
  ]
})
