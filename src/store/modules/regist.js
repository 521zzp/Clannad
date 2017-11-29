import * as types from '../mutation-types'
import { REGISTER, REGISTER_SEND_CODE, REGISTER_GEETEST_INIT } from '@/config/url'
import {postModelTwo, getModel, analy} from '@/tool/net'
import {message} from '@/tool/talk'
import store from '@/store'
import router from '@/router'
import gt from '@/tool/gt'

const state = {
	text: '发送验证码',
	sendAbel: true,
	captchaObj: null
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
						message(datas.msg,4);
						state.sendAbel = true;
					}
			}).catch(function(error) {
				state.sendAbel = true;
			  });
		}
  	},
  	regist ({commit}, obj) {
  		const vali = state.captchaObj ? state.captchaObj.getValidate() : false;
  		
  		if (!vali) { 
  			message('请先完成验证!') 
  		} else {
  			const valiResult = {
  				geetest_challenge: vali.geetest_challenge,
                geetest_validate: vali.geetest_validate,
                geetest_seccode: vali.geetest_seccode
  			}
  			fetch(REGISTER, postModelTwo({ ...obj, ...valiResult })).then(analy)
				.then((datas)=>{
					commit(types.REGISTER,datas);
				}).catch(function(error) {
					state.captchaObj && state.captchaObj.reset() 
			});
  		}
  		
  		
  	},
  	async registerGeetestInit ({commit}, domNode) {
  		
  		const data = await fetch(REGISTER_GEETEST_INIT, getModel()).then(analy)
  		console.log('data', data)
  		gt()
  		
  		initGeetest({
		   	// 以下配置参数来自服务端 SDK
		   	gt: data.gt,
		   	challenge: data.challenge,
		   	offline: !data.success,
		   	new_captcha: true,
		   	width: '100%',
		   	product: 'float',
		}, function (captchaObj) {
			commit(types.REGISTER_GEETEST_INIT, captchaObj)
			captchaObj.appendTo(domNode)
		   	// 这里可以调用验证实例 captchaObj 的实例方法
		})
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
   },
   [types.REGISTER_GEETEST_INIT] (state, obj) {
   		state.captchaObj = obj
    }
}


export default{
	state,
	actions,
	mutations
}
