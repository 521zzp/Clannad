import * as types from './mutation-types'
import {EXIT, TRADE} from '@/config/url'
import {postModelOne, analy, getModel} from '@/tool/net'
import {confirmMoadl} from '@/tool/talk'

export const actions = {
	exit ({commit},obj){
		confirmMoadl('退出','是否退出当前账号？',() => {
			fetch(EXIT, postModelOne(obj)).then(analy)
				.then((datas)=>{
				commit(types.EXIT,datas);
				}).catch(function(error) {
			   	commit(types.EXIT,{});
			  })
		},()=>{} )
	},
	userImgUpload ({commit},obj) {
		commit(types.HOME_IMG_UPLOAD,obj);
	},
	developeTrapdoor ({commit},obj) {
		commit(types.TRAPDOOR,obj);
	},
	tradeSwitch ({commit},obj) {
		fetch(TRADE, getModel()).then(analy).then(
			(datas) => commit(types.TRADE,datas)
		)
	}
}