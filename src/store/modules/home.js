import * as types from '../mutation-types'
import {HOME_PRODUCTS} from '@/config/url'
import {getModel,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'


const state = {
	main:{},
	products:[],
	banner:[
		{
			img: 'http://www.art.com/home/banner/banner-one.jpg',
			url: 'a'
		},
		{
			img: 'http://www.art.com/home/banner/banner-two.jpg',
			url: 'b'
		},
		{
			img: 'http://www.art.com/home/banner/banner-three.jpg',
			url: 'c'
		},
		{
			img: 'http://www.art.com/home/banner/banner-four.jpg',
			url: 'd'
		},
	]
}

const actions = {
	homeProducts ({commit}) {
		fetch(HOME_PRODUCTS, getModel()).then(analy).then(
			(datas) => commit(types.HOME_PRODUCTS,datas)
		)
	}
}

const mutations = {
	[types.HOME_PRODUCTS] (state,obj) {
		state.main = obj.main;
		state.products = obj.list;
    }
}


export default{
	state,
	actions,
	mutations
}
