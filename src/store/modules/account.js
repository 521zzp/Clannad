import * as types from '../mutation-types'
import {ACC_BREAD_CHANGE, ACC_BIND_STATE, ACC_OV_CAP, SUPPORT_BANK_UPDATE, ACC_MSG_TOTAL, ACC_MSG_LIST, ACC_MSG_READ, ACC_MSG_DELETE} from '@/config/url'
import {postModelOne, onanaly} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	bread: [], //面包屑导航
	bindStatus: { //用户绑定的些东西
		insur: false,
		bankCard: false,
		payPwd: false,
		idCard: false
	},
	overViewCapital: {
		yesterday: 0,
		total: 0,
		current: 0,
		balance: 0,
		accumulate: 0,
		points: 0
	},
	recharge: {
		loading: false
	},
	bankCard: { //银行卡信息
		baseInfo: {
		},
		banks: [] //支持银行列表
	},
	current: {
		balance: 5000
	},
	message: {
		total: 0,
		list: []
	}
}


const actions = {
	accountBreadChange ({commit},obj){
		commit(types.ACC_BREAD_CHANGE, obj);
  	},
  	accountBindState ({commit}, obj) {
  		fetch(ACC_BIND_STATE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_BIND_STATE, datas)
		)
  	},
  	accountRechargeLoading ({commit},obj) {
  		commit(types.ACC_RECHARGE_LOADING, obj)
  	},
  	ovCap ({commit},obj) {
  		fetch(ACC_OV_CAP, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_OV_CAP, datas)
		)
  	},
  	supportBankUpdate ({commit},obj) {
  		fetch(SUPPORT_BANK_UPDATE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.SUPPORT_BANK_UPDATE, datas)
		)
  	},
  	accountMessageTotal ({ commit }, obj) {
  		fetch(ACC_MSG_TOTAL, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_MSG_TOTAL, datas)
		)
  	},
  	accountMessageList ({ commit }, obj) {
  		fetch(ACC_MSG_LIST, postModelOne(obj)).then(onanaly).then(
			(datas) => {
				console.log(110)
				console.log(datas)
				commit(types.ACC_MSG_LIST, datas)
			}
		)
  	},
  	accountMessageRead ({ commit }, obj) {
  		fetch(ACC_MSG_READ, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_MSG_READ, datas)
		)
  	},
  	accountMessageDelete ({ commit }, obj) {
  		fetch(ACC_MSG_DELETE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_MSG_DELETE, datas)
		)
  	},
  	accountMessageSelect ({ commit }, obj) {
  		commit(types.ACC_MSG_SELECT, obj)
  	}
}

const mutations = {
	[types.ACC_BREAD_CHANGE] (state, obj) {
		state.bread = obj
    },
    [types.ACC_BIND_STATE] (state, obj) {
		state.bindStatus = obj
    },
    [types.ACC_OV_CAP] (state, obj) {
		state.overViewCapital = obj
    },
    [types.SUPPORT_BANK_UPDATE] (state, obj) {
		state.bankCard.banks = []
    },
    [types.ACC_RECHARGE_LOADING] (state, obj) {
		state.recharge.loading= obj
    },
    [types.ACC_MSG_TOTAL] (state, obj) {
    	console.log(4444)
		state.message.total = obj.total
    },
    [types.ACC_MSG_LIST] (state, obj) {
    	console.log(obj)
    	let list = obj.map(
    		(x) => Object.assign({}, x, {checked: false})
    	)
		state.message.list = list
    },
    [types.ACC_MSG_READ] (state, obj) {
		console.log(obj)
    },
    [types.ACC_MSG_DELETE] (state, obj) {
		console.log(obj)
    },
    [types.ACC_MSG_SELECT] (state, obj) {
		console.log(obj)
    },
    
}


export default{
	state,
	actions,
	mutations
}
