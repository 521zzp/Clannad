import * as types from '../mutation-types'
import {LOGIN} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	bread: []
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	accountBreadChange ({commit},obj){
		commit(types.ACC_BREAD_CHANGE,obj);
  	}
}

const mutations = {
	[types.ACC_BREAD_CHANGE] (state,obj) {
		state.bread = obj
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
