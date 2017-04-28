import * as types from '../mutation-types'
import {status,json} from '@/tools/tool'

const state = {
	
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	login ({commit},obj){
		
		console.log('登陆：');
		console.log(obj);
		obj.type=1;
		var data ={
			useraccount : '15773270836',
			password :'asfa454152',
			captcha : 'sfag'
		}
		
		fetch('http://192.168.1.200:8083/usesr/check', {
				method: 'post',
				credentials: 'include',
				headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
				 },
				body : JSON.stringify(data)
				}).then(status).then(json)
				.then((datas)=>{
				console.log('请求到数据为：');
				console.log(datas);
			
			commit(types.LOGIN,obj);
			}).catch(function(error) {
			   console.log('request failed', error)
			  });
  	}
}

const mutations = {
	[types.LOGIN] (state,obj) {
		
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
