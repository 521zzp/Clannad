import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {actions} from './actions'
import {mutations} from './mutations'
import home from './modules/home'
import login from './modules/login'
import regist from './modules/regist'


Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		token:'', //user online state
		user: {
			name: '音无结弦',
			img: '//i0.hdslb.com/bfs/face/121922b3ec1235997d5611f826e19faf31bd6d40.jpg_52x52.jpg',
		}, //user name
		notice: {
			state: 1,
			type: 1,
			obj: {}
		}
	},
	mutations,
	actions,
	modules: {
		home,
		login,
		regist
	}
})

export default store
