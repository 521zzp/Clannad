import * as types from '../mutation-types'
import { ACC_YESTER_PROFIT, ACC_FIN_TOTAL, ACC_FIN_LIST, ACC_FIN_OUT_TOTAL, ACC_FIN_OUT_LIST } from '@/config/url'
import { getModel, postModelOne, onanaly } from '@/tool/net'
import { message } from '@/tool/talk'

const state = {
	yesterdayProfit: 0,
	onTotal: 0,
	onTotalFlag: 0,
	onList: [],
	outTotal: 0,
	outTotalFlag: 0,
	outList: [],
	endTotal: 0,
	endTotalFlag: 0,
	endList: []
	
}


const actions = {
  	accYesterdayProfitGet({ commit }, obj){
  		fetch(ACC_YESTER_PROFIT, postModelOne()).then(onanaly).then(
  			datas => commit(types.ACC_YESTER_PROFIT, datas)
  		)
  	},
  	accFinanceTotal ({ commit }, obj) {
  		fetch(ACC_FIN_TOTAL, postModelOne(obj)).then(onanaly).then(
  			datas => commit(types.ACC_FIN_TOTAL, Object.assign({}, datas, {type: obj.type}))
  		)
  	},
  	accFinanceList ({ commit }, obj) {
  		fetch(ACC_FIN_LIST, postModelOne(obj)).then(onanaly).then(
  			datas => {
  				commit(types.ACC_FIN_LIST, Object.assign({}, {list: datas}, {type: obj.type}))
  			}
  		)
  	},
  	accFinanceOutTotal ({ commit }, obj) {
  		fetch(ACC_FIN_OUT_TOTAL, postModelOne(obj)).then(onanaly).then(
  			datas => commit(types.ACC_FIN_OUT_TOTAL, datas)
  		)
  	},
  	accFinanceOutList ({ commit }, obj) {
  		fetch(ACC_FIN_OUT_LIST, postModelOne(obj)).then(onanaly).then(
  			datas => commit(types.ACC_FIN_OUT_LIST, datas)
  		)
  	}
}

const mutations = {
	[types.ACC_YESTER_PROFIT] (state, obj) {
		state.yesterdayProfit = obj.money
	},
	[types.ACC_FIN_TOTAL] (state, obj) {
   		if(obj.type === 1 && Number.isInteger(obj.total)) {
   			state.onTotal = obj.total
   			state.onTotalFlag = state.onTotalFlag + 1
   			if (state.onTotal === 0) {
   				state.onList = []
   			}
   		}
   		if (obj.type === 0 && Number.isInteger(obj.total)) {
   			state.endTotal = obj.total
   			state.endTotalFlag = state.endTotalFlag + 1
   			if (state.endTotal === 0) {
   				state.endList = []
   			}
   		}
	},
	[types.ACC_FIN_LIST] (state, {list, type}) {
   		if(type === 1 && Array.isArray(list)) {
   			state.onList = list
   		}
   		if(type === 0 && Array.isArray(list)) {
   			state.endList = list
   		}
	},
	[types.ACC_FIN_OUT_TOTAL] (state, obj) {
   		state.outTotal = obj.total
   		state.outTotalFlag = state.outTotalFlag + 1
   		if (state.outTotal === 0) {
   			state.outList = []
   		}
	},
	[types.ACC_FIN_OUT_LIST] (state, obj) {
   		state.outList = obj
	}
   
}


export default{
	state,
	actions,
	mutations
}
