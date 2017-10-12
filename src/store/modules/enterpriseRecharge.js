import * as types from '../mutation-types'
import { ENTERPRISE_RECHARGE_CONFIRM, ENTERPRISE_RECHARGE } from '@/config/url'
import { postModelOne, analy } from '@/tool/net'
import { message } from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	show: true,
	account: '',
	
	count: 1,
	action: '',
	items: '',
	recharge: {},
}


const actions = {
	enterpriseRechargeConfirm ({ commit }, obj){
		fetch(ENTERPRISE_RECHARGE_CONFIRM, postModelOne(obj)).then(analy)
			.then((datas)=>{
				console.log('ss')
				console.log(datas)
			commit(types.ENTERPRISE_RECHARGE_CONFIRM, { account: obj.account, result: true });
		}).catch(function(error) {
			commit(types.ENTERPRISE_RECHARGE_CONFIRM, { account: obj.account, result: false });
		  });
  	},
  	enterpriseRecharge ({ commit }, obj){
  		const account = state.account
		fetch(ENTERPRISE_RECHARGE, postModelOne({ ...obj, account })).then(analy).then(
			(datas)=>{
			commit(types.ENTERPRISE_RECHARGE, datas);
		}).catch(function(error) {
		  });
  	}
}

const mutations = {
	[types.ENTERPRISE_RECHARGE_CONFIRM] (state, { account, result }) {
		if (!result) {
			router.push('/not-fount')
		} else {
			state.account = account
		}
		state.show = result
    },
    [types.ENTERPRISE_RECHARGE] (state, obj) {
    	console.log(obj)
   		state.recharge = obj
    }
}


export default{
	state,
	actions,
	mutations
}
