import Vue from 'vue'
import Router from 'vue-router'
/*import Login from '@/components/page/Login'
import Regist from '@/components/page/Regist'
import Home from '@/components/page/Home'
import Recharge from '@/components/page/Recharge'
import ResetPwd from '@/components/page/ResetPwd'
import ProductCenter from '@/components/page/ProductCenter'
import ProductDetail from '@/components/page/ProductDetail'
import Account from '@/components/page/Account'*/

const Login = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['@/components/page/Login.vue'], () => {
    resolve(require('@/components/page/Login.vue'))
  })
}
const Regist = resolve => {
  require.ensure(['@/components/page/Regist.vue'], () => {
    resolve(require('@/components/page/Regist.vue'))
  })
}
const Home = resolve => {
  require.ensure(['@/components/page/Home.vue'], () => {
    resolve(require('@/components/page/Home.vue'))
  })
}
const Recharge = resolve => {
  require.ensure(['@/components/page/Recharge.vue'], () => {
    resolve(require('@/components/page/Recharge.vue'))
  })
}
const ResetPwd = resolve => {
  require.ensure(['@/components/page/ResetPwd.vue'], () => {
    resolve(require('@/components/page/ResetPwd.vue'))
  })
}
const ProductCenter = resolve => {
  require.ensure(['@/components/page/ProductCenter.vue'], () => {
    resolve(require('@/components/page/ProductCenter.vue'))
  })
}
const ProductDetail = resolve => {
  require.ensure(['@/components/page/ProductDetail.vue'], () => {
    resolve(require('@/components/page/ProductDetail.vue'))
  })
}
const Account = resolve => {
  require.ensure(['@/components/page/Account.vue'], () => {
    resolve(require('@/components/page/Account.vue'))
  })
}




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
	      path: '/product/:id',
	      name: 'ProductDetail',
	      component: ProductDetail
	    },
	    {
	      path: '/account',
	      name: 'Account',
	      component: Account
	    },
	    {
	      path: '/recharge',
	      name: 'Recharge',
	      component: Recharge
	    }
	    
	  ]
})
