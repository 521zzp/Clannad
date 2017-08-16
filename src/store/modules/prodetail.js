import * as types from '../mutation-types'
import {PRO_DETAIL_INFO} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import router from '@/router'

const state = {
	details: {
		total: 0,
		min: 0,
		productItems: {
			receive: '',
			safeInsur: '',
			enterprise: '',
		},
		memberRate: 0,
		rate: 0,
		left: 0,
		name: '',
		time: '',
		day: 0,
		percent: 0,
		records:[]
	},
}


const actions = {
	getProDetailInfo ({commit},obj){
		fetch(PRO_DETAIL_INFO, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.PRO_DETAIL_INFO, datas);
			}).catch(function(error) {
			    console.log('查询产品详情信息异常', error)
			  });
  	}
}

const mutations = {
	[types.PRO_DETAIL_INFO] (state, obj) {
		if (!obj) {
			router.go(-1)
		} else {
			state.details = obj
		}
    }
}


export default{
	state,
	actions,
	mutations
}
