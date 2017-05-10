import * as types from '../mutation-types'
import {RECHARGE} from '@/config/url'
import {postModelOne,onanaly} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	count: 1,
	action: '',
	items: ''
}


const actions = {
	recharge ({commit},obj){
		fetch(RECHARGE, postModelOne(obj)).then(onanaly)
				.then((datas)=>{
				commit(types.RECHARGE,datas);
			}).catch(function(error) {
			    console.log('用户登陆异常', error)
			  });
  	}
}

const mutations = {
	[types.RECHARGE] (state,obj) {
		state.action = obj.action;
		state.items = obj.items;
		state.count++;
		console.log(obj)
    }
}


export default{
	state,
	actions,
	mutations
}
