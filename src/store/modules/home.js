import * as types from '../mutation-types'
import {HOME_PRODUCTS, HOME_NEWS_LIST, HOME_INVEST_RECORD, HOME_NOTICE, HOME_BANNER} from '@/config/url'
import {getModel,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'


const state = {
	main:{
		endMilliseconds: 0,
		startMillFlag: 0,
		type: 0,
		people: 0,
		percent: 0,
		endMillFlag: 0,
		total: 0,
		min: 0,
		rate: 0,
		left: 0,
		name: '',
		startMilliseconds: 0,
		id: 0,
		day: 0
	},
	products:[],
	banner:[],
	investList: [],
	newsList: {},
	notice: '',
	
}

const actions = {
	homeProducts ({commit}) {
		fetch(HOME_PRODUCTS, getModel()).then(analy).then(
			(datas) => commit(types.HOME_PRODUCTS, datas)
		)
	},
	homeInvestRecords ({commit}, obj) {
		fetch(HOME_INVEST_RECORD, getModel()).then(analy).then(
			(datas) => commit(types.HOME_INVEST_RECORD, datas)
		)
	},
	homeNewsList ({commit}, obj) {
		fetch(HOME_NEWS_LIST, getModel()).then(analy).then(
			(datas) => commit(types.HOME_NEWS_LIST, datas)
		)
	},
	homeNotice ({ commit }, obj) {
		fetch(HOME_NOTICE, getModel()).then(analy).then(
			(datas) => commit(types.HOME_NOTICE, datas.notice)
		)
	},
	homeBannerList ({ commit }, obj) {
		fetch(HOME_BANNER, getModel()).then(analy).then(
			(datas) => commit(types.HOME_BANNER, datas)
		)
	}
}

const mutations = {
	[types.HOME_PRODUCTS] (state,obj) {
		state.main = obj.main;
		state.products = obj.list;
		if (state.main.type === 1) {
			let maxTimeDelay = 1000;
			let minTimeDelay = 21;
			clearInterval(secClock);
			let secClock = setInterval(function(){
				let start = state.main.startMilliseconds;
				let end = state.main.endMilliseconds;
				if (start > 0) {
					state.main.startMilliseconds = state.main.startMilliseconds - maxTimeDelay
					if (start < state.main.startMillFlag) {
						clearInterval(secClock);
						secClock = setInterval(function(){ //秒杀开始倒计时毫秒
							if (state.main.startMilliseconds > 0) {
								state.main.startMilliseconds = state.main.startMilliseconds - minTimeDelay
							} else {
								clearInterval(secClock);
								setInterval(function () { //秒杀进行中倒计时秒
									if (state.main.endMilliseconds > state.main.endMillFlag) { 
										state.main.endMilliseconds = state.main.endMilliseconds -maxTimeDelay
									} else {
										clearInterval(secClock);
										secClock = setInterval(function () { //秒杀即将结束倒计时毫秒
											state.main.endMilliseconds = state.main.endMilliseconds - minTimeDelay;
											if (state.main.endMilliseconds < 0) {
												clearInterval(secClock);
											}
										}, minTimeDelay);
									}
								}, maxTimeDelay);
							}
						}, minTimeDelay)
					} 
				} else if (end > 0) {
					state.main.endMilliseconds = state.main.endMilliseconds - maxTimeDelay
					if (end < state.main.endMillFlag) {
						clearInterval(secClock);
						secClock = setInterval(function () {
							state.main.endMilliseconds = state.main.endMilliseconds - minTimeDelay;
							if (state.main.endMilliseconds < 0) {
								clearInterval(secClock);
							}
						}, minTimeDelay);
					} 
				}
			}, maxTimeDelay)
		}
    },
    [types.HOME_INVEST_RECORD] (state, obj) {
    	state.investList = obj
    },
    [types.HOME_NEWS_LIST] (state,obj) {
    	state.newsList = obj 
    },
    [types.HOME_NOTICE] (state, obj) {
    	state.notice = obj
    },
    [types.HOME_BANNER] (state, obj) {
    	state.banner = obj
    }
}


export default{
	state,
	actions,
	mutations
}
