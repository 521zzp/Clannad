<template>
	<div>
		<b class="user-account-common-title">添加银行卡</b>
		 <Form class="my-form" ref="form" :model="form" :rules="ruleValidate" :label-width="100">
	        <Form-item label="真实姓名" prop="name">
	            <Input size="large" v-model="form.name" placeholder="请输入姓名"></Input>
	        </Form-item>
	        <Form-item label="身份证" prop="idcard">
	            <Input size="large" v-model="form.idcard" placeholder="请输身份证号" :maxlength="18"></Input>
	        </Form-item>
	        <Form-item label="选择银行" prop="bank">
	            <Select size="large" v-model="form.bank" placeholder="请选择所在地">
	                <Option v-for="item in bankList" :value=" '' +item.value" :key="item.value">{{item.label}}</Option>
	            </Select>
	        </Form-item>
	        <Form-item label="开户省/市" prop="area" class="add-bankcard-pro-city">
	            <Cascader size="large" v-model="form.area" :data="areaList"></Cascader>
	        </Form-item>
	        <Form-item label="开户支行" prop="branch">
	            <Input size="large" v-model="form.branch" placeholder="请输入开户支行"></Input>
	        </Form-item>
	        <Form-item label="开户分行" prop="subbranch">
	            <Input size="large" v-model="form.subbranch" placeholder="请输入开户分行"></Input>
	        </Form-item>
	        <Form-item label="银行卡号" prop="bankCard">
	            <Input size="large" v-model="form.bankCard" placeholder="请输入银行卡号" :maxlength="19"></Input>
	        </Form-item>
	        <Form-item label="预留手机号" prop="phone">
	            <Input size="large" v-model="form.phone" placeholder="请输入银行预留手机号" :maxlength="11"></Input>
	        </Form-item>
	        <!--<Form-item label="验证码" class="rela-plant" prop="phoneCode">
	            <Input size="large" v-model="form.phoneCode" placeholder="请输入验证码"></Input>
	            <span class="send-code" @click="sendCode">发送验证码</span>
	        </Form-item>-->
	        <Form-item>
	            <Button size="large" type="primary" @click="handleSubmit('form')">提交</Button>
	            <Button size="large" type="ghost" @click="handleReset('form')" style="margin-left: 8px">重置</Button>
	        </Form-item>
	    </Form>
	</div>
</template>

<script>
import {validatePhone, checkPhone, validateIdcard, validateProCity, validateBankcard} from '@/tool/regx'
export default {
    data () {
        return {
            form: {
                name: '',
                idcard: '',
                bank: '',
                area: [],
				pro:'',
				city:'',
				branch:'',
				subbranch: '',
				bankCard:'',
				phone:'',
				/*phoneCode:'',*/
            },
            ruleValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                idcard: [
                    { required: true, message: '身份证不能为空', trigger: 'blur' },
                    { validator: validateIdcard, trigger: 'blur' }
                ],
                bank: [
                    { required: true, message: '请选择银行', trigger: 'change' }
                ],
                area: [
                   { validator: validateProCity, trigger: 'blur' },
                ],
                branch: [
                    { required: true, message: '开户支行不能为空', trigger: 'blur' }
                ],
                subbranch: [
                    { required: true, message: '开户分行不能为空', trigger: 'blur' }
                ],
                bankCard: [
                    { required: true, message: '银行卡号不能为空', trigger: 'blur' },
                    { validator: validateBankcard, trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '银行预留手机号不能为空', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
             /*   phoneCode: [
                	{ required: true, message: '验证码不能为空', trigger: 'blur' },
                ]*/
            }
        }
    },
    created () {
    	if (this.$store.state.account.banks.length === 0) {
    		this.$store.dispatch('accountBankSupport')
    	}
    	if (this.$store.state.account.areas.length === 0) {
    		this.$store.dispatch('accountAreaSupport')
    	}
    },
    computed: {
    	bankList () {
    		return this.$store.state.account.banks
    	},
    	areaList () {
    		return this.$store.state.account.areas
    	}
    },
    mounted () {
		let bread = [
				{
					name: '掌柜金服',
					url: '/'
				},
				{
					name: '我的账户',
					url: '/account'
				},
				{
					name: '银行卡管理',
					url: '/account/bankcard'
				},
				{
					name: '添加银行卡',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	const obj = {
                		name: this.form.name,
		                idcard: this.form.idcard,
		                bank: parseInt(this.form.bank),
		                area: this.form.area.map( x => parseInt(x)),
						branch: this.form.branch,
						subbranch: this.form.subbranch,
						bankCard: this.form.bankCard,
						phone: this.form.phone,
                	}
                	this.$store.dispatch('accountBankBandAdd', obj)
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>

<style type="text/css">
	.add-bankcard-pro-city label:before{
		content: '*';
		display: inline-block;
		margin-right: 4px;
		line-height: 1;
		font-family: SimSun;
		font-size: 12px;
		color: #ff3300;
	}
</style>
<style lang="less" scoped="scoped">
@import '../../../config/base.less';
.rela-plant{
	position: relative;
}
.my-form{
	width: 340px;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
}
.send-code{
	position: absolute;
	right: 10px;
	height: 34px;
	top: 1px;
	line-height: 34px;
	padding-left: 10px;
	cursor: pointer;
	border-left: 1px solid @border-one;
}

</style>