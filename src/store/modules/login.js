import * as types from '../mutation-types'
import { LOGIN , LOGIN_GEETEST_INIT } from '@/config/url'
import { postModelTwo, getModel, analy } from '@/tool/net'
import { message } from '@/tool/talk'
import store from '@/store'
import router from '@/router'
import gt from '@/tool/gt'

const state = {
	captchaObj: '',
}

const getters = {
	filterCheck: state =>state.filterCheck
}

const actions = {
	login ({commit},obj){
		const vali = state.captchaObj ? state.captchaObj.getValidate() : false;
  		
  		if (!vali) { 
  			message('请先完成验证!') 
  		} else {
  			const valiResult = {
  				geetest_challenge: vali.geetest_challenge,
                geetest_validate: vali.geetest_validate,
                geetest_seccode: vali.geetest_seccode
  			}
  			fetch(LOGIN, postModelTwo({ ...obj, ...valiResult })).then(analy)
				.then((datas)=>{
					commit(types.LOGIN, datas);
				}).catch(function(error) {
					state.captchaObj && state.captchaObj.reset() 
			});
  		}
		
		
		
  	},
  	async loginGeetestInit ({commit}, domNode) {
  		const data = await fetch(LOGIN_GEETEST_INIT, getModel()).then(analy)
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
			commit(types.LOGIN_GEETEST_INIT, captchaObj)
			console.log('domNode')
			console.log(domNode)
			captchaObj.appendTo(domNode)
		   	// 这里可以调用验证实例 captchaObj 的实例方法
		})
  	}
}

const mutations = {
	[types.LOGIN] (state,obj) {
		store.state.token = obj.token;
		store.state.user = obj.user;
		message(obj.msg, 2, () => 
			{
				router.push('/')
			}
		);
   },
   [types.LOGIN_GEETEST_INIT] (state, obj) {
   		state.captchaObj = obj
    }
}


export default{
	state,
	getters,
	actions,
	mutations
}
