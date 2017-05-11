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
			message(obj.msg,4);
		}
    },
    [types.HOME_IMG_UPLOAD] (state,obj) {
    	console.log(2222)
    	console.log(obj)
    	state.user.img = obj.img
    	console.log(state.user.img)
    }
}
