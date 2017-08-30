import * as types from '../mutation-types'
import {PHONECODEVALI, RESETPWD_SEND_CODE, RESETPWD} from '@/config/url'
import {postModelTwo, analy} from '@/tool/net'
import {message} from '@/tool/talk'
import router from '@/router'

const state = {
	status: 'wait',
	step: 0,
	text: '发送验证码',
	sendAbel: true,
	stepOneState: {
		account:'',
		phoneCode:''
	}
}

const actions = {
	resetPwdSendCode ({commit},obj){
		if (state.sendAbel) {
			state.sendAbel = false;
			fetch(RESETPWD_SEND_CODE, postModelTwo(obj)).then(analy)
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
  	resetPwdOne ({commit},obj) {
  		fetch(PHONECODEVALI, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.RESETPWDONE,datas);
			}).catch(function(error) {
		    console.log(error)
		  });
  	},
  	resetPwdTwo ({commit},obj) {
  		fetch(RESETPWD, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.RESETPWDTWO,datas);
			}).catch(function(error) {
		    console.log(error)
		  });
  	}
}

const mutations = {
	[types.RESETPWDONE] (state,obj) {
		if (obj.code === 200) {
			state.status = 'wait';
			state.step++;
		}else{
			state.status = 'error';
			message(obj.msg,4);
		}
    },
    [types.RESETPWDTWO] (state,obj) {
		if (obj.code === 200) {
			state.status = 'finish';
			state.step++;
			setTimeout(function () {
				router.push('/login');
			}, 5000);
		}else{
			state.status = 'error';
			message(obj.msg,4);
		}
    },
}


export default{
	state,
	actions,
	mutations
}
