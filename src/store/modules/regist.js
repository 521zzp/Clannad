import * as types from '../mutation-types'
import {REGISTER,SMSCODE} from '@/config/url'
import {postModelTwo,analy} from '@/tool/net'
import store from '@/store'
import router from '@/router'

const state = {
	text: '发送验证码',
	sendAbel: true
}


const actions = {
	registSendCode ({commit},obj){
		store.state.notice.state++;
		store.state.notice.obj = {
			name: 'zzp',
			msg: 'hellow'
		}
		console.log(222)
		console.log(store.state.user.name)
		console.log(store.state.notice.state)
		if (state.sendAbel) {
			state.sendAbel = false;
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
		}
		fetch(SMSCODE, postModelTwo(obj)).then(analy)
				.then((datas)=>{
					console.log(datas)
				console.log('验证已发送')
			}).catch(function(error) {
			    console.log('注册验证码发送异常', error)
			  });
  	},
  	regist ({commit},obj) {
  		console.log(obj)
  		fetch(REGISTER, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				console.log('注册返回')
				console.log(datas)
				commit(types.REGIST,datas);
			}).catch(function(error) {
			    console.log('新用户注册异常', error)
			  });
  	}
}

const mutations = {
	[types.REGIST] (state,obj) {
		if (obj.code === 200) {
			store.state.token = obj.token;
			store.state.user = obj.obj;
			router.push('/')
			console.log('登陆成功')
		}else{
			console.log('登陆失败')
		}
    }
}


export default{
	state,
	actions,
	mutations
}
