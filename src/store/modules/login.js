import * as types from '../mutation-types'
import {LOGIN} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	login ({commit},obj){
		fetch(LOGIN, postModelTwo(obj)).then(analy)
				.then((datas)=>{
					console.log(1)
					console.log(datas)
				commit(types.LOGIN, datas);
			}).catch(function(error) {
			    console.log('用户登陆异常', error)
			  });
  	}
}

const mutations = {
	[types.LOGIN] (state,obj) {
		store.state.token = obj.token;
		store.state.user = obj.user;
		message(obj.msg, 2, () => 
			{
				console.log('路由跳转')
				router.push('/')
			}
		);
		/*if (obj.code === 200) {
			console.log('用户登陆返回信息' + obj);
			
		}else{
			message(obj.msg, 4)
		}*/
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
