import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Regist from '@/components/page/Regist'
import Home from '@/components/page/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }
    
  ]
})
