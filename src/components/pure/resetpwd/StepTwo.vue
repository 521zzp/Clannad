<template>
	<div>
		<Form id="two-form" class="only-regist-form"  ref="twoForm" :model="twoForm" :rules="rules" :label-width="80">
	        <Form-item label="新密码" prop="password">
	            <Input class="regist-item" type="password" placeholder="6~18位数组字母组合" v-model="twoForm.password"></Input>
	        </Form-item>
	        <Form-item label="确认密码" prop="pwdConfirm">
	            <Input type="password" placeholder="6~18位数组字母组合" v-model="twoForm.pwdConfirm"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="next" type="primary" @click="handleSubmit('twoForm')">下一步</Button>
	        </Form-item>
	    </Form>
	</div>
</template>

<script>
import {validatePwd} from '@/tool/regx'
    export default {
    	props: ['text'],
        data () {
        	const validatePass = (rule, value, callback) => {
        		let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (!regx.test(value)) {
					 callback(new Error('密码为6~18为数字字母组合'));
				} else {
                    if (this.twoForm.pwdConfirm !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.twoForm.validateField('pwdConfirm');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.twoForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                twoForm: {
                    password: '',
                    pwdConfirm: ''
                },
                rules: {
                	password: [
                		{ required: true, message: '请填写密码', trigger: 'blur' },
                		{ validator: validatePass, trigger: 'blur' }
                	],
                    pwdConfirm: [
                        { required: true, message: '请再次填写密码', trigger: 'blur' },
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        mounted () {
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	let obj = {
                    		password: this.twoForm.password
                    	}
                    	this.$emit('submit',obj)
                    } else {
                    }
                })
            },
            sendCode () {
            	if (checkPhone(this.twoForm.account)) {
            		this.$emit('sendCode',{account:this.twoForm.account})
            	} else {
            		this.$refs.twoForm.validateField('account');
            	}
            }
        }
    }
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
#two-form{
	width: 400px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
}
.rela-plant{
	position: relative;
}
.send-code{
	font-size: @fz;
	padding-left: 10px;
	position: absolute;
	right: 10px;
	top: 6px;
	cursor: pointer;
	height: 30px;
	display: block;
	line-height: 30px;
	color: @border-one;
	border-left: 1px solid @border-one;
}
.next{
	width: 100%;
	height: 44px;
	font-size: @fz;
}
</style>