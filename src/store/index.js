import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {actions} from './actions'
import {mutations} from './mutations'

Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		token:'' //user online state
	},
	mutations,
	actions,
	modules: {
	}
})

export default store
