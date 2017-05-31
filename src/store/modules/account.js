import * as types from '../mutation-types'
import {ACC_BREAD_CHANGE, ACC_BIND_STATE, ACC_OV_CAP, SUPPORT_BANK_UPDATE} from '@/config/url'
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
	bankCard: { //银行卡信息
		baseInfo: {
		},
		banks: [] //支持银行列表
	},
	current: {
		balance: 5000
	}
}


const actions = {
	accountBreadChange ({commit},obj){
		commit(types.ACC_BREAD_CHANGE,obj);
  	},
  	accountBindState ({commit},obj) {
  		fetch(ACC_BIND_STATE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_BIND_STATE,datas)
		)
  	},
  	ovCap ({commit},obj) {
  		fetch(ACC_OV_CAP, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_OV_CAP,datas)
		)
  	},
  	supportBankUpdate ({commit},obj) {
  		fetch(SUPPORT_BANK_UPDATE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.SUPPORT_BANK_UPDATE,datas)
		)
  	}
}

const mutations = {
	[types.ACC_BREAD_CHANGE] (state,obj) {
		state.bread = obj
		console.log(state.bread)
    },
    [types.ACC_BIND_STATE] (state,obj) {
		state.bindStatus = obj
    },
    [types.ACC_OV_CAP] (state,obj) {
		state.overViewCapital = obj
    },
    [types.SUPPORT_BANK_UPDATE] (state,obj) {
		state.bankCard.banks = []
    },
}


export default{
	state,
	actions,
	mutations
}
