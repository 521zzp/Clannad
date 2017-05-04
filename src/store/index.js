import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {actions} from './actions'
import {mutations} from './mutations'
import home from './modules/home'
import login from './modules/login'


Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		token:'', //user online state
		user: {
			name: '音无结弦',
			img: '//i0.hdslb.com/bfs/face/121922b3ec1235997d5611f826e19faf31bd6d40.jpg_52x52.jpg',
		} //user name
	},
	mutations,
	actions,
	modules: {
		home,
		login
	}
})

export default store
