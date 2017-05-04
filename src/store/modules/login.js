import * as types from '../mutation-types'
import {LOGIN} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import store from '@/store'

console.log(1)
console.log(analy)
console.log(2)

const state = {
	
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	login ({commit},obj){
		fetch(LOGIN, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.LOGIN,datas);
			}).catch(function(error) {
			    console.log('用户登陆异常', error)
			  });
  	}
}

const mutations = {
	[types.LOGIN] (state,obj) {
		if (obj.code === 200) {
			store.token = obj.token;
			store.user = obj.obj;
			console.log('登陆成功')
		}else{
			console.log('登陆失败')
		}
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
