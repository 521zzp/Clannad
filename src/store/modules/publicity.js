import * as types from '../mutation-types'
import {LOGIN} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	bread: [], //面包屑导航
	navOpen: 1
}

const actions = {
	publicityBreadChange ({commit}, obj) {
		commit(types.PUB_BREAD_CHANGE, obj) 
	},
	publicityNavChange ({commit}, obj) {
		commit(types.PUB_NAV_CHANGE, obj)
	}
}

const mutations = {
	[types.PUB_BREAD_CHANGE] (state,obj) {
		state.bread = obj
    },
    [types.PUB_NAV_CHANGE] (state,obj) {
		state.navOpen = obj
    },
   
}


export default{
	state,
	actions,
	mutations
}
