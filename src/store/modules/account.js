import * as types from '../mutation-types'
import { ACC_BREAD_CHANGE, ACC_BIND_STATE, ACC_OV_CAP, SUPPORT_BANK_UPDATE, ACC_MSG_TOTAL, ACC_MSG_LIST, ACC_MSG_READ, ACC_MSG_DELETE, 
	ACC_INFO_LOGIN_PWD_CHANGE, ACC_INFO_PAY_PWD_CHANGE, ACC_INFO_BASE, ACC_INFO_PAY_PWD_BACK_SEND_CODE, ACC_INFO_PAY_PWD_BACK_ONE, ACC_INFO_PAY_PWD_BACK_TWO,
	ACC_INFO_PAY_PWD_SET, ACC_BANK_INFO, ACC_BANK_DETAIL_INFO, ACC_BANK_SUPPORT, ACC_AREA_SUPPORT, ACC_BANK_BAND, ACC_BANK_CHANGE, ACC_INFO_PHONE_SEND_CODE,
	ACC_INFO_PHONE_SEND_CODE_NEW, ACC_INFO_PHONE_CHANGE, PHONECODEVALI, ACC_INFO_INIT, ACC_TEAM_TOTAL, ACC_TEAM_LIST, ACC_CAP_RECORD_TOTAL, ACC_CAP_RECORD_LIST
	
	} from '@/config/url'
import {postModelOne, onanaly, getModel, analy } from '@/tool/net'
import { message } from '@/tool/talk'
import router from '@/router'
import areas from '@/config/area.json' 







const state = {
	bread: [], //面包屑导航
	bindStatus: { //用户绑定的些东西
		insur: false,
		bankCard: true,
		payPwd: false,
		idCard: false
	},
	overViewCapital: {
		yesterday: 0, //昨日受益
		total: 0, //总资产
		current: 0, //活期宝
		balance: 0, //账户余额
		freeze: 0, //冻结金额
		accumulate: 0, //累计受益
		points: 0, //积分
	},
	ovReacord: {
		total: 0,
		totalFlag: 0,
		list: [],
	},
	recharge: {
		loading: false
	},
	current: {
		balance: 5000
	},
	message: {
		total: 0,
		allSelect: false,
		list: []
	},
	accInfoBase: {
		idCard: 'idcard',
		bankCard: 'bankcard',
		phone: 'phone',
		loginTime: 'logintime'
	},
	changeLoginPwdFlag: 0, //更改登录密码后表单重置标志
	changePayPwdFlag: 0, //更改支付密码后表单重置标志
	payPwdBack: {
		step: 0,
		text: '发送验证码',
		sendAbel: true,
		account: '',
		phoneCode: '',
		idCard: '',
	},
	bankInfo: {
		bankName: '',
		bankCard: '',
		userName: '',
		branch: '', //分行
		subbranch: '', //支行
		pro: '', //省份
		city: '', //城市
		time: '', //绑定时间
		status: '', //状态
	},
	banks: [], //支持的银行列表
	areas: areas, //省市级联
	bankDetailInfo: {
		name: '',//展示，不可编辑
		idcard: '',//展示，不可编辑
		bank: '', //支持银行卡列表,
		branch: '',
		subbranch: '',
		card: '',//银行卡号
		phone: '',
	},
	changePhone: {
		step: 1,
		text: '发送验证码',
		sendAbel: true,
		account: '',
		phoneCode: '',
		newText: '发送验证码',
		newSendAbel: true,
	},
	team: {
		total: 0,
		totalFlag: 0,
		list: []
	}
}


const actions = {
	accountBreadChange ({commit},obj){
		commit(types.ACC_BREAD_CHANGE, obj);
  	},
  	accountBindState ({commit}, obj) {
  		fetch(ACC_BIND_STATE, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_BIND_STATE, datas)
		)
  	},
  	accountRechargeLoading ({commit},obj) {
  		commit(types.ACC_RECHARGE_LOADING, obj)
  	},
  	ovCap ({commit}, obj) {
  		fetch(ACC_OV_CAP, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_OV_CAP, datas)
		)
  	},
  	accountMessageTotal ({ commit }, obj) {
  		fetch(ACC_MSG_TOTAL, postModelOne(obj)).then(onanaly).then(
			(datas) => commit(types.ACC_MSG_TOTAL, datas)
		)
  	},
  	accountMessageList ({ commit }, obj) {
  		fetch(ACC_MSG_LIST, postModelOne(obj)).then(onanaly).then(
			(datas) => {
				commit(types.ACC_MSG_LIST, datas)
			}
		)
  	},
  	accountMessageRead ({ commit }, obj) {
  		fetch(ACC_MSG_READ, postModelOne(obj)).then(onanaly).then(
			(datas) => {
				if (datas.result) {
					commit(types.ACC_MSG_READ, obj.ids)
				} else {
					message(datas.message, 4) 
				}
			}
		)
  	},
  	accountMessageDelete ({ commit }, obj) {
  		fetch(ACC_MSG_DELETE, postModelOne(obj)).then(onanaly).then(
			(datas) => {
				if (datas.result) {
					commit(types.ACC_MSG_DELETE, obj.ids)
					message(datas.msg, 2)
				} 
			}
		)
  	},
  	accountMessageSelect ({ commit }, obj) {
  		commit(types.ACC_MSG_SELECT, obj)
  	},
  	accountMessageSelectAll ({ commit }, obj) {
  		commit(types.ACC_MSG_SELECT_ALL, obj)
  	},
  	accountInfoLoginPwd ({ commit }, obj) {
  		fetch(ACC_INFO_LOGIN_PWD_CHANGE, postModelOne(obj)).then(onanaly).then(
  			datas => {
  				if (datas.code === 200) {
  					commit(types.ACC_INFO_LOGIN_PWD_CHANGE)
  					message(datas.msg, 2)
  				} else {
  					message(datas.msg, 4)
  				}
  			}
  		).catch((e) => {
  			message('网络异常，请您稍后再试', 4)
  		})
  	},
  	accountInfoPayPwdChange ({ commit }, obj) {
  		fetch(ACC_INFO_PAY_PWD_CHANGE, postModelOne(obj)).then(onanaly).then(
  			datas => {
  				if (datas.code === 200) {
  					commit(types.ACC_INFO_PAY_PWD_CHANGE, datas)
  					message(datas.msg, 2)
  				} else {
  					message(datas.msg, 4)
  				}
  			}
  		)
  	},
  	accountInfoBaseGet ({ commit }, obj) {
  		fetch(ACC_INFO_BASE, postModelOne(obj)).then(onanaly).then(
  			datas => {datas ? commit(types.ACC_INFO_BASE, datas) : ''}
  		)
  	},
  	payPwdBackSendCode ({ commit }, obj){
		if (state.payPwdBack.sendAbel) {
			state.payPwdBack.sendAbel = false;
			fetch(ACC_INFO_PAY_PWD_BACK_SEND_CODE, postModelOne(obj)).then(onanaly)
				.then((datas)=>{
					if (datas.code === 200){
						message(datas.msg,2);
						let time = 60;
						state.payPwdBack.text = time + 's后重新发送';
						let clock = setInterval(function () {
							time--;
							state.payPwdBack.text = time + 's后重新发送';
							if(time==0){
								state.payPwdBack.text = '发送验证码';
								clearInterval(clock);
								state.payPwdBack.sendAbel = true;
							}
						},1000);
					}else{
						message(datas.msg,4);
						state.payPwdBack.sendAbel = true;
					}
			}).catch(function(error) {
				state.payPwdBack.sendAbel = true;
			  });
		}
  	},
  	payPwdBackStepOne ({ commit }, obj) {
  		fetch(ACC_INFO_PAY_PWD_BACK_ONE, postModelOne(obj)).then(onanaly).then(
  			datas => {
  				if (datas.code === 200) {
  					commit(types.ACC_INFO_PAY_PWD_BACK_ONE, obj)
  				} else {
  					message(datas.msg, 4)
  				}
  			}
  		)
  	},
  	payPwdBackStepTwo ({ commit }, obj) {
  		const temp = {
  			account: state.payPwdBack.account,
  			phoneCode: state.payPwdBack.phoneCode,
  			idCard: state.payPwdBack.idCard
  		}
  		fetch(ACC_INFO_PAY_PWD_BACK_TWO, postModelOne(Object.assign({}, obj, temp))).then(onanaly).then(
  			datas => datas ? commit(types.ACC_INFO_PAY_PWD_BACK_TWO) : ''
  		)
  	},
  	accountLoadInit ({ commit }, obj) {
  		commit(types.ACC_INFO_INIT, obj)
  	},
  	accountPayPwdSet ({ commit }, obj) {
  		fetch(ACC_INFO_PAY_PWD_SET, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_INFO_PAY_PWD_SET, datas) : ''
  		)
  	},
  	accountBankInfoGet ({ commit }, obj) {
  		fetch(ACC_BANK_INFO, postModelOne()).then(onanaly).then(
  			datas => datas ? commit(types.ACC_BANK_INFO, datas) : ''
  		)
  	},
  	accountBankDetailInfoGet ({ commit }, ojb) {
  		fetch(ACC_BANK_DETAIL_INFO, postModelOne()).then(onanaly).then(
  			datas => datas ? commit(types.ACC_BANK_DETAIL_INFO, datas) : ''
  		)
  	},
  	accountBankSupport ({ commit }, obj) {
  		fetch(ACC_BANK_SUPPORT, getModel()).then(analy).then(
  			datas => datas ? commit(types.ACC_BANK_SUPPORT, datas) : ''
  		)
  	},
  	accountAreaSupport ({ commit }, obj) {
  		fetch(ACC_AREA_SUPPORT, getModel()).then(analy).then(
  			datas => datas ? commit(types.ACC_AREA_SUPPORT, datas) : ''
  		)
  	},
  	accountBankBandAdd ({ commit }, obj) {
  		fetch(ACC_BANK_BAND, postModelOne(obj)).then(analy).then(
  			datas => {
  				if (datas) {
  					message(datas.msg, 2, () => router.push('/account/bankcard') )
  				}
  			}
  		)
  	},
  	accountBankChange ({ commit }, obj) {
  		fetch(ACC_BANK_CHANGE, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? message(datas.msg, 2, () => router.push('/account/bankcard')) : ''
  		)
  	},
  	accountChangePhoneSendCode ({ commit }, obj){
		if (state.changePhone.sendAbel) {
			state.changePhone.sendAbel = false;
			fetch(ACC_INFO_PHONE_SEND_CODE, postModelOne(obj)).then(onanaly)
				.then((datas)=>{
					if (datas.code === 200){
						message(datas.msg,2);
						let time = 60;
						state.changePhone.text = time + 's后重新发送';
						let clock = setInterval(function () {
							time--;
							state.changePhone.text = time + 's后重新发送';
							if(time==0){
								state.changePhone.text = '发送验证码';
								clearInterval(clock);
								state.changePhone.sendAbel = true;
							}
						},1000);
					}else{
						message(datas.msg,4);
						state.changePhone.sendAbel = true;
					}
			}).catch(function(error) {
				state.changePhone.sendAbel = true;
			  });
		}
  	},
  	accountChangePhoneCodeVali ({ commit }, obj) {
  		fetch(PHONECODEVALI, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_INFO_PHONE_VALI_CODE, obj) : ''
  		)
  	},
  	accountChangePhoneSendCodeNext ({ commit }, obj){
		if (state.changePhone.newSendAbel) {
			state.changePhone.newSendAbel = false;
			fetch(ACC_INFO_PHONE_SEND_CODE_NEW, postModelOne(obj)).then(onanaly)
				.then((datas)=>{
					if (datas.code === 200){
						message(datas.msg,2);
						let time = 60;
						state.changePhone.newText = time + 's后重新发送';
						let clock = setInterval(function () {
							time--;
							state.changePhone.newText = time + 's后重新发送';
							if(time==0){
								state.changePhone.newText = '发送验证码';
								clearInterval(clock);
								state.changePhone.newSendAbel = true;
							}
						},1000);
					}else{
						message(datas.msg,4);
						state.changePhone.newSendAbel = true;
					}
			}).catch(function(error) {
				state.changePhone.newSendAbel = true;
			  });
		}
  	},
  	accountChangePhone ({ commit }, obj) {
  		const old = {
  			account: state.changePhone.account,
  			phoneCode: state.changePhone.phoneCode
  		}
  		fetch(ACC_INFO_PHONE_CHANGE, postModelOne(Object.assign({}, obj, old))).then(onanaly).then(
  			datas => {
  				if (datas) {
  					message(datas.msg, 2)
  					commit(types.ACC_INFO_PHONE_CHANGE, datas)
  				}
  			}
  		)
  	},
  	accountTeamTotal({ commit }, obj) {
  		fetch(ACC_TEAM_TOTAL, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_TEAM_TOTAL, datas) : ''
  		)
  	},
  	accountTeamList ({ commit }, obj) {
  		fetch(ACC_TEAM_LIST, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_TEAM_LIST, datas) : ''
  		)
  	},
  	accountCapitalRecordTotal ({ commit }, obj) {
  		fetch(ACC_CAP_RECORD_TOTAL, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_CAP_RECORD_TOTAL, datas) : ''
  		)
  	},
  	accountCapitalRecordList ({ commit }, obj) {
  		fetch(ACC_CAP_RECORD_LIST, postModelOne(obj)).then(onanaly).then(
  			datas => datas ? commit(types.ACC_CAP_RECORD_LIST, datas) : ''
  		)
  	}
}

const mutations = {
	[types.ACC_BREAD_CHANGE] (state, obj) {
		state.bread = obj
    },
    [types.ACC_BIND_STATE] (state, obj) {
		state.bindStatus = obj
    },
    [types.ACC_OV_CAP] (state, obj) {
		state.overViewCapital = obj
    },
    [types.ACC_RECHARGE_LOADING] (state, obj) {
		state.recharge.loading= obj
    },
    [types.ACC_MSG_TOTAL] (state, obj) {
		state.message.total = obj.total
    },
    [types.ACC_MSG_LIST] (state, obj) {
    	let list = obj.map(
    		(x) => Object.assign({}, x, {checked: false})
    	)
		state.message.list = list
    },
    [types.ACC_MSG_READ] (state, obj) {
		for (let index in state.message.list ) {
			if (~obj.indexOf(state.message.list[index].id)) {
				state.message.list[index].read = true
			}
		}
		state.message.list.map(
			item => item.checked = false
		)
		state.message.allSelect = false
    },
    [types.ACC_MSG_DELETE] (state, obj) {
		for (let index in state.message.list ) {
			if (~obj.indexOf(state.message.list[index].id)) {
				state.message.list.splice(index,1)
			}
		}
		state.message.allSelect = false
    },
    [types.ACC_MSG_SELECT] (state, obj) {
    	state.message.list.map(
    		item => {
    			if (item.id === obj.id) {
    				item.checked = !item.checked
    			}
    		}
    	)
    },
    [types.ACC_MSG_SELECT_ALL] (state, obj) {
    	state.message.allSelect = true
    	state.message.list.map(
    		item => item.checked = obj
    	)
    },
    [types.ACC_INFO_LOGIN_PWD_CHANGE] (state, obj) {
    	state.changeLoginPwdFlag = state.changeLoginPwdFlag + 1
    },
    [types.ACC_INFO_PAY_PWD_CHANGE] (state, obj) {
    	state.changePayPwdFlag = state.changePayPwdFlag + 1
    },
    [types.ACC_INFO_BASE] (state, obj) {
		state.accInfoBase = obj
    },
    [types.ACC_INFO_PAY_PWD_BACK_ONE] (state, obj) {
    	state.payPwdBack.step = state.payPwdBack.step + 1
    	state.payPwdBack.account = obj.account
    	state.payPwdBack.phoneCode = obj.phoneCode
    	state.payPwdBack.idCard = obj.idCard
    },
    [types.ACC_INFO_INIT] (state, ojb) {
    	state.payPwdBack.step = 0
    	state.changePhone.step = 0
    },
    [types.ACC_INFO_PAY_PWD_BACK_TWO] (state, obj) {
    	state.payPwdBack.step = state.payPwdBack.step + 1
    },
    [types.ACC_INFO_PAY_PWD_SET] (state, obj) {
    	state.bindStatus.payPwd = true
    	message(obj.msg, 2)
    },
    [types.ACC_BANK_INFO] (state, obj) {
    	state.bankInfo = obj
    },
    [types.ACC_BANK_DETAIL_INFO] (state, obj) {
    	state.bankDetailInfo = obj
    },
    [types.ACC_BANK_SUPPORT] (state, obj) {
    	state.banks = obj
    },
    [types.ACC_AREA_SUPPORT] (state, obj) {
    	/*
    	state.areas = obj*/
    },
    [types.ACC_INFO_PHONE_VALI_CODE] (state, obj) {
    	state.changePhone.step = state.changePhone.step + 1
    	state.changePhone.account = obj.account
    	state.changePhone.phoneCode = obj.phoneCode
    },
    [types.ACC_INFO_PHONE_CHANGE] (state, obj) {
    	state.changePhone.step = state.changePhone.step + 1
    },
    [types.ACC_TEAM_TOTAL] (state, { total }) {
    	state.team.total = total
    	state.team.totalFlag++
    },
    [types.ACC_TEAM_LIST] (state, obj) {
    	state.team.list = obj
    },
    [types.ACC_CAP_RECORD_TOTAL] (state, { total }) {
    	state.ovReacord.total = total
    	state.ovReacord.totalFlag++
    },
    [types.ACC_CAP_RECORD_LIST] (state, obj) {
    	state.ovReacord.list = obj
    }
     
}

export default{
	state,
	actions,
	mutations
}
