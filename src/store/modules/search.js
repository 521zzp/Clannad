import * as types from '../mutation-types'
import {status,json} from '@/tools/tool'

const state = {
    msg: '曾志鹏：vuex', //discription
    filterCheck : null
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	change ({commit},obj){
		fetch('/static/package.json', {
				method: 'get',
				credentials: 'include',
				headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
				  }
				}).then(status).then(json)
				.then((datas)=>{
			console.log(datas);
			commit(types.CHANGE,obj);
			}).catch(function(error) {
			    console.log('request failed', error)
			  });
  	}
}

const mutations = {
	[types.CHANGE] (state,obj) {
      state.msg = '曾志鹏：'+obj.msg
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
