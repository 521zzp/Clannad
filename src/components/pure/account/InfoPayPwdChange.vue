<template>
	<div class="clearfix">
		<div class="clearfix form-pwd">
			<Form ref="myForm" :model="myForm" :rules="ruleCustom" :label-width="100">
			 	 <Form-item label="当前支付密码" prop="oldPwd">
		            <Input type="password" size="large" v-model="myForm.oldPwd" :maxlength="6"  placeholder="请输入当前支付密码(6位数字)"></Input>
		        </Form-item>
		        <Form-item label="设置新支付密码" prop="newPwd">
		            <Input type="password" size="large" v-model="myForm.newPwd" :maxlength="6" placeholder="请输入新支付密码(6位数字)"></Input>
		        </Form-item>
		        <Form-item label="确认新支付密码" prop="passwdCheck">
		            <Input type="password" size="large" v-model="myForm.passwdCheck" :maxlength="6" placeholder="请确认新支付密码(6位数字)"></Input>
		        </Form-item>
		        <Form-item>
		            <Button type="primary" class="form-submit" @click="handleSubmit('myForm')">保存密码</Button>
		        </Form-item>
		    </Form>
		</div>
	</div>
</template>

<script>
import {validatePayPwd, checkPayPwd } from '@/tool/regx'
	
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else {
                if (this.myForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.myForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '' || !checkPayPwd(value)) {
                callback(new Error('支付密码不正确'));
            } else if (value !== this.myForm.newPwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            myForm: {
                oldPwd: '',
                newPwd: '',
                passwdCheck: ''
                
            },
            ruleCustom: {
                oldPwd: [
                    { validator: validatePayPwd, trigger: 'blur' }
                ],
                newPwd: [
                   { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ]
               
            }
        }
    },
    computed: {
    	resetFlag () {
    		return this.$store.state.account.changePayPwdFlag
    	}
    },
    watch: {
    	resetFlag () {
    		this.handleReset('myForm')
    	}
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    const obj = {
                    	oldPayPwd: this.myForm.oldPwd,
                    	payPwd: this.myForm.newPwd
                    }
                    this.$store.dispatch('accountInfoPayPwdChange', obj)
                } 
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}

</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.form-pwd{
	width: 400px;
	margin-top: 70px;
	margin-bottom: 90px;
	margin-left: auto;
	margin-right: auto;
}
.form-submit{
	width: 100%;
	height: 36px;
}


</style>