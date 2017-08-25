import * as types from '../mutation-types'
import { ACC_COUPON_TOTAL, ACC_COUPON_LIST } from '@/config/url'
import { getModel, postModelOne, onanaly } from '@/tool/net'
import { message } from '@/tool/talk'

const state = {
	redTotal: 0,
	redTotalFlag: 0,
	redList: [],
	
	experienceTotal: 0,
	experienceTotalFlag: 0,
	experienceList: [],
	
	raiseTotal: 0,
	raiseTotalFlag: 0,
	raiseList: [],
	
}

const actions = {
  	accCouponTotal({ commit }, obj){
  		fetch(ACC_COUPON_TOTAL, postModelOne(obj)).then(onanaly).then(
  			datas => commit(types.ACC_COUPON_TOTAL, Object.assign( {}, datas, { type: obj.type}))
  		)
  	},
  	accCouponList ({ commit }, obj) {
  		fetch(ACC_COUPON_LIST, postModelOne(obj)).then(onanaly).then(
  			datas => commit(types.ACC_COUPON_LIST, Object.assign( {}, {list: datas}, {type: obj.type}))
  		)
  	}
}

const mutations = {
	[types.ACC_COUPON_TOTAL] (state, { total, type }) {
		
		switch (type){
			case 1:
				state.redTotal = total ? total : 0
				state.redTotal === 0 ? '' : state.redList = [] 
				state.redTotalFlag = state.redTotalFlag + 1
				break;
			case 2:
				state.experienceTotal = total ? total : 0
				state.experienceTotal === 0 ? '' : state.experienceList = [] 
				state.experienceTotalFlag = state.experienceTotalFlag + 1
				break;
			case 3:
				state.raiseTotal = total ? total : 0
				state.raiseTotal === 0 ? '' : state.raiseList = [] 
				state.raiseTotalFlag = state.raiseTotalFlag + 1
				break;
			default:
				break;
		}
	},
	[types.ACC_COUPON_LIST] (state, {list, type}) {
		if (Array.isArray(list)) {
			switch (type){
				case 1:
					state.redList = list
					break;
				case 2:
					state.experienceList = list
					break;
				case 3:
					state.raiseList = list
					break;
				default:
					break;
			}
		}
	},
   
}


export default{
	state,
	actions,
	mutations
}

