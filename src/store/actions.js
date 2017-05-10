import * as types from './mutation-types'
import {EXIT} from '@/config/url'
import {postModelOne,analy} from '@/tool/net'
import {confirmMoadl} from '@/tool/talk'

export const actions = {
	exit ({commit},obj){
		confirmMoadl('退出','是否退出当前账号？',() => {
			fetch(EXIT, postModelOne(obj)).then(analy)
				.then((datas)=>{
				commit(types.EXIT,datas);
				}).catch(function(error) {
			    console.log(error)
			  })
		},()=>{} )
		
	}
}