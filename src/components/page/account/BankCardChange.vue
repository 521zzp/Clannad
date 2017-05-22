<template>
	<div>
		<b class="user-account-common-title">更换银行卡</b>
		<Form class="my-form" ref="form" :model="form" :rules="ruleValidate" :label-width="100">
	        <Form-item label="真实姓名" prop="name">
	            <Input size="large" v-model="form.name" placeholder="请输入姓名" disabled></Input>
	        </Form-item>
	        <Form-item label="身份证" prop="idcard">
	            <Input size="large" v-model="form.idcard" placeholder="请输身份证号" :maxlength="18" disabled></Input>
	        </Form-item>
	        <Form-item label="选择银行" prop="bank">
	            <Cascader size="large" v-model="form.bank" :data="bankList"></Cascader>
	        </Form-item>
	        <Form-item label="开户省/市" prop="area" class="add-bankcard-pro-city">
	            <Cascader size="large" v-model="form.area" :data="form.areaList"></Cascader>
	        </Form-item>
	        <Form-item label="开户支行" prop="branch">
	            <Input size="large" v-model="form.branch" placeholder="请输入开户支行"></Input>
	        </Form-item>
	        <Form-item label="开户分行" prop="subbranch">
	            <Input size="large" v-model="form.subbranch" placeholder="请输入开户分行"></Input>
	        </Form-item>
	        <Form-item label="银行卡号" prop="card">
	            <Input size="large" v-model="form.card" placeholder="请输入银行卡号" :maxlength="19"></Input>
	        </Form-item>
	        <Form-item label="预留手机号" prop="phone">
	            <Input size="large" v-model="form.phone" placeholder="请输入银行预留手机号" :maxlength="11"></Input>
	        </Form-item>
	        <Form-item label="验证码" class="rela-plant" prop="phoneCode">
	            <Input size="large" v-model="form.phoneCode" placeholder="请输入验证码"></Input>
	            <span class="send-code" >发送验证码</span>
	        </Form-item>
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
                bank:[],
                area: [],
				pro:'',
				city:'',
				branch:'',
				subbranch: '',
				card:'',
				phone:'',
				phoneCode:'',
				areaList: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
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
                card: [
                    { required: true, message: '银行卡号不能为空', trigger: 'blur' },
                    { validator: validateBankcard, trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '银行预留手机号不能为空', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ],
                phoneCode: [
                	{ required: true, message: '验证码不能为空', trigger: 'blur' },
                ]
            }
        }
    },
    created () {
    	if (this.$store.state.account.bankCard.banks.length === 0) {
    		this.$store.dispatch('supportBankUpdate')
    	}
    },
    computed: {
    	bankList () {
    		console.log(1)
    		console.log(this.$store.state.account.bankCard.banks)
    		return this.$store.state.account.bankCard.banks
    	}
    },
    mounted () {
		let bread = [
				{
					name: '余惠宝',
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
					name: '更换银行卡',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
            	console.log(this.form.area)
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
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
	line-height: 34px;
	top: 1px;
	padding-left: 10px;
	cursor: pointer;
	border-left: 1px solid @border-one;
}

</style>