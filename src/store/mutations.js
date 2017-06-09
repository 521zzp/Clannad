import * as types from './mutation-types'
import router from '@/router'
import store from '@/store'
import {message} from '@/tool/talk'

export const mutations = {
	[types.EXIT] (state,obj) {
		if (!obj.status) {
			store.state.token = '';
			store.state.user = {};
			message(obj.msg, 2, ()=>router.push('/'))
		}else{
			store.state.token = '';
			store.state.user = {};
			message('您已成功退出', 2, ()=>router.push('/'))
		}
    },
    [types.HOME_IMG_UPLOAD] (state,obj) {
    	state.user.img = obj.img
    },
    [types.TRAPDOOR] (state,obj) {
    	state.token = obj.token
    	state.user = obj.user
    	state.trade = true
    },
    [types.TRADE] (state,obj) {
    	state.trade = obj.trade
    },
}
