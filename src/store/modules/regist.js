import * as types from '../mutation-types'
import { REGISTER, REGISTER_SEND_CODE } from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	text: '发送验证码',
	sendAbel: true
}

const actions = {
	registSendCode ({commit},obj){
		if (state.sendAbel) {
			state.sendAbel = false;
			fetch(REGISTER_SEND_CODE, postModelTwo(obj)).then(analy)
				.then((datas)=>{
					if (datas.code === 200){
						message(datas.msg,2);
						let time = 60;
						state.text = time + 's后重新发送';
						let clock = setInterval(function () {
							time--;
							state.text = time + 's后重新发送';
							if(time==0){
								state.text = '发送验证码';
								clearInterval(clock);
								state.sendAbel = true;
							}
						},1000);
					}else{
						debugger
						message(datas.msg,4);
						state.sendAbel = true;
					}
			}).catch(function(error) {
				state.sendAbel = true;
			  });
		}
  	},
  	regist ({commit},obj) {
  		fetch(REGISTER, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.REGISTER,datas);
			}).catch(function(error) {
		  });
  	}
}

const mutations = {
	[types.REGISTER] (state,obj) {
		if (obj.code === 200) {
			store.state.token = obj.token;
			store.state.user = obj.user;
			message(obj.msg, 2, ()=>router.push('/'))
		}else{
			message(obj.msg,4);
		}
    }
}


export default{
	state,
	actions,
	mutations
}
