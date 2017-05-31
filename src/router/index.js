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
const Overview = resolve => {
  require.ensure(['@/components/page/account/Overview.vue'], () => {
    resolve(require('@/components/page/account/Overview.vue'))
  })
}
const Recharge = resolve => {
  require.ensure(['@/components/page/account/Recharge.vue'], () => {
    resolve(require('@/components/page/account/Recharge.vue'))
  })
}
const Financing = resolve => {
  require.ensure(['@/components/page/account/Financing.vue'], () => {
    resolve(require('@/components/page/account/Financing.vue'))
  })
}
const BankCard = resolve => {
  require.ensure(['@/components/page/account/BankCard.vue'], () => {
    resolve(require('@/components/page/account/BankCard.vue'))
  })
}
const BankCardAdd = resolve => {
  require.ensure(['@/components/page/account/BankCardAdd.vue'], () => {
    resolve(require('@/components/page/account/BankCardAdd.vue'))
  })
}
const BankCardChange = resolve => {
  require.ensure(['@/components/page/account/BankCardChange.vue'], () => {
    resolve(require('@/components/page/account/BankCardChange.vue'))
  })
}
const Current = resolve => {
  require.ensure(['@/components/page/account/Current.vue'], () => {
    resolve(require('@/components/page/account/Current.vue'))
  })
}
const CurrentOut = resolve => {
  require.ensure(['@/components/page/account/CurrentOut.vue'], () => {
    resolve(require('@/components/page/account/CurrentOut.vue'))
  })
}
const CurrentIn = resolve => {
  require.ensure(['@/components/page/account/CurrentIn.vue'], () => {
    resolve(require('@/components/page/account/CurrentIn.vue'))
  })
}
const Franchiser = resolve => {
  require.ensure(['@/components/page/account/Franchiser.vue'], () => {
    resolve(require('@/components/page/account/Franchiser.vue'))
  })
}
const Insurance = resolve => {
  require.ensure(['@/components/page/account/Insurance.vue'], () => {
    resolve(require('@/components/page/account/Insurance.vue'))
  })
}
const Message = resolve => {
  require.ensure(['@/components/page/account/Message.vue'], () => {
    resolve(require('@/components/page/account/Message.vue'))
  })
}
const Information = resolve => {
  require.ensure(['@/components/page/account/Information.vue'], () => {
    resolve(require('@/components/page/account/Information.vue'))
  })
}
const Publicity = resolve => {
  require.ensure(['@/components/page/Publicity.vue'], () => {
    resolve(require('@/components/page/Publicity.vue'))
  })
}
const SystemIllustrate = resolve => {
  require.ensure(['@/components/page/publicity/SystemIllustrate.vue'], () => {
    resolve(require('@/components/page/publicity/SystemIllustrate.vue'))
  })
}
const Deposit = resolve => {
  require.ensure(['@/components/page/publicity/Deposit.vue'], () => {
    resolve(require('@/components/page/publicity/Deposit.vue'))
  })
}
const Provisions = resolve => {
  require.ensure(['@/components/page/publicity/Provisions.vue'], () => {
    resolve(require('@/components/page/publicity/Provisions.vue'))
  })
}
const SafeConduct = resolve => {
  require.ensure(['@/components/page/publicity/SafeConduct.vue'], () => {
    resolve(require('@/components/page/publicity/SafeConduct.vue'))
  })
}
const Partner = resolve => {
  require.ensure(['@/components/page/publicity/Partner.vue'], () => {
    resolve(require('@/components/page/publicity/Partner.vue'))
  })
}
const ServiceNote = resolve => {
  require.ensure(['@/components/page/publicity/ServiceNote.vue'], () => {
    resolve(require('@/components/page/publicity/ServiceNote.vue'))
  })
}
const YhbData = resolve => {
  require.ensure(['@/components/page/publicity/Data.vue'], () => {
    resolve(require('@/components/page/publicity/Data.vue'))
  })
}
const ContactUs = resolve => {
  require.ensure(['@/components/page/publicity/ContactUs.vue'], () => {
    resolve(require('@/components/page/publicity/ContactUs.vue'))
  })
}
const JoinUs = resolve => {
  require.ensure(['@/components/page/publicity/JoinUs.vue'], () => {
    resolve(require('@/components/page/publicity/JoinUs.vue'))
  })
}
const Aptitude = resolve => {
  require.ensure(['@/components/page/publicity/Aptitude.vue'], () => {
    resolve(require('@/components/page/publicity/Aptitude.vue'))
  })
}
const YhbIntroduce = resolve => {
  require.ensure(['@/components/page/publicity/Introduce.vue'], () => {
    resolve(require('@/components/page/publicity/Introduce.vue'))
  })
}
const YhbAnnouncement = resolve => {
  require.ensure(['@/components/page/publicity/Announcement.vue'], () => {
    resolve(require('@/components/page/publicity/Announcement.vue'))
  })
}
const YhbNews = resolve => {
  require.ensure(['@/components/page/publicity/News.vue'], () => {
    resolve(require('@/components/page/publicity/News.vue'))
  })
}
const AppDownload = resolve => {
  require.ensure(['@/components/page/AppDownload.vue'], () => {
    resolve(require('@/components/page/AppDownload.vue'))
  })
}
const Guide = resolve => {
  require.ensure(['@/components/page/Guide.vue'], () => {
    resolve(require('@/components/page/Guide.vue'))
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
	      component: Account,
	      children: [
	      	{
	      		path: '',
	      		name:'overview',
	      	  component: Overview,
	      	  meta: {accBar: 1}
	      	},
	      	{
			      path: 'recharge',
			      name: 'Recharge',
			      component: Recharge,
			      meta: {accBar: 1}
			    },
	      	{
	      		path: 'financing',
	      		name:'financing',
	      	  component: Financing,
	      	  meta: {accBar: 2}
	      	},
	      	{
	      		path: 'current',
	      		name:'current',
	      	  component: Current,
	      	  meta: {accBar: 3}
	      	},
	      	{
	      		path: 'current/out',
	      		name:'current-out',
	      	  component: CurrentOut,
	      	  meta: {accBar: 3}
	      	},
	      	{
	      		path: 'current/in',
	      		name:'current-in',
	      	  component: CurrentIn,
	      	  meta: {accBar: 3}
	      	},
	      	{
	      		path: 'franchiser',
	      		name:'franchiser',
	      	  component: Franchiser,
	      	  meta: {accBar: 6}
	      	},
	      	{
	      		path: 'insurance',
	      		name:'insurance',
	      	  component: Insurance,
	      	  meta: {accBar: 7}
	      	},
	      	{
	      		path: 'information',
	      		name:'information',
	      	  component: Information,
	      	  meta: {accBar: 8}
	      	},
	      	{
	      		path: 'bankcard',
	      		name:'bankcard',
	      	  component: BankCard,
	      	  meta: {accBar: 9}
	      	},
	      	{
	      		path: 'bankcard/add',
	      		name:'bankcard-add',
	      	  component: BankCardAdd,
	      	  meta: {accBar: 9}
	      	},
	      	{
	      		path: 'bankcard/change',
	      		name:'bankcard-change',
	      	  component: BankCardChange,
	      	  meta: {accBar: 9}
	      	},
	      	{
	      		path: 'message',
	      		name:'message',
	      	  component: Message,
	      	  meta: {accBar: 11}
	      	},
	      ]
	    },
	    {
	      path: '/publicity',
	      name: 'Publicity',
	      component: Publicity,
	      children: [
	     	  {
	      		path: 'introduce',
	      		name:'yhbIntroduce',
	      	  component: YhbIntroduce,
	      	  meta: {pubBar: 1}
	      	},
	      	{
	      		path: 'systemIllustrate',
	      		name:'systemIllustrate',
	      	  component: SystemIllustrate,
	      	  meta: {pubBar: 2}
	      	},
	      	{
	      		path: 'deposit',
	      		name:'deposit',
	      	  component: Deposit,
	      	  meta: {pubBar: 3}
	      	},
	      	{
	      		path: 'provisions',
	      		name:'provisions',
	      	  component: Provisions,
	      	  meta: {pubBar: 4}
	      	},
	      	{
	      		path: 'data',
	      		name:'yhbData',
	      	  component: YhbData,
	      	  meta: {pubBar: 5}
	      	},
	      	{
	      		path: 'safeConduct',
	      		name:'safeConduct',
	      	  component: SafeConduct,
	      	  meta: {pubBar: 6}
	      	},
	      	{
	      		path: 'announcement',
	      		name:'yhbAnnouncement',
	      	  component: YhbAnnouncement,
	      	  meta: {pubBar: 7}
	      	},
	      	{
	      		path: 'news',
	      		name:'YhbNews',
	      	  component: YhbNews,
	      	  meta: {pubBar: 8}
	      	},
	      	{
	      		path: 'aptitude',
	      		name:'aptitude',
	      	  component: Aptitude,
	      	  meta: {pubBar: 11}
	      	},
	      	{
	      		path: 'serviceNote',
	      		name:'serviceNote',
	      	  component: ServiceNote,
	      	  meta: {pubBar: 12}
	      	},
	      	{
	      		path: 'partner',
	      		name:'partner',
	      	  component: Partner,
	      	  meta: {pubBar: 13}
	      	},
	      	{
	      		path: 'contactUs',
	      		name:'contactUs',
	      	  component: ContactUs,
	      	  meta: {pubBar: 14}
	      	},
	      	{
	      		path: 'join',
	      		name:'JoinUs',
	      	  component: JoinUs,
	      	  meta: {pubBar: 15}
	      	},
	      ]
	    },
	    {
	      path: '/guide',
	      name: 'Guide',
	      component: Guide
	    },
	    {
	      path: '/app',
	      name: 'AppDownload',
	      component: AppDownload
	    },
	  ]
})
