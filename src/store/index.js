import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {actions} from './actions'
import {mutations} from './mutations'
import home from './modules/home'
import login from './modules/login'
import regist from './modules/regist'
import recharge from './modules/recharge'
import resetpwd from './modules/resetpwd'
import prodetail from './modules/prodetail'
import account from './modules/account'
import accfinance from './modules/accfinance'
import acccoupon from './modules/acccoupon'
import publicity from './modules/publicity'
import enterpriseRecharge from './modules/enterpriseRecharge'


Vue.use(Vuex)
let token = '';
let user = null;
try{
	token = localStorage.getItem('token');
	user = JSON.parse(localStorage.getItem('user'));
}catch(e){
	token = '';
	user = null;
}


const store = new Vuex.Store({
	state: {
		token: token, //user online state
		user: user ? user : {
			name: '未实名',
			account: 'ss',
			img: '',
		},
		trade: false, //平台是否开启交易
		capital: {
			balance: 1000
		},
		notice: {
			state: 1,
			type: 0,
			config: null
		},
		noticeClose: {
			state: 1,
			key: ''
		},
		message: {
			state: 1,
			type: 0,
			config: null
		},
		simpleModal: {
			state: 1,
			type: 0,
			config: null
		},
		confirmMoadl: {
			state: 1,
			config: null
		},
		progress: false,
	},
	mutations,
	actions,
	modules: {
		home,
		login,
		regist,
		recharge,
		resetpwd,
		prodetail,
		account,
		publicity,
		accfinance,
		acccoupon,
		enterpriseRecharge,
	}
})

export default store
