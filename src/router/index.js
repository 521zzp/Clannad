import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Regist from '@/components/page/Regist'
import Home from '@/components/page/Home'
import Recharge from '@/components/page/Recharge'
import ResetPwd from '@/components/page/ResetPwd'
import ProductCenter from '@/components/page/ProductCenter'

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
    },
    {
      path: '/resetpwd',
      name: 'ResetPwd',
      component: ResetPwd
    },
    {
      path: '/product',
      name: 'ProductCenter',
      component: ProductCenter
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    }
    
  ]
})
