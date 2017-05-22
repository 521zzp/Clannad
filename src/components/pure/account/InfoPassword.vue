<template>
	<div class="clearfix">
		<div class="clearfix form-pwd">
			<Form ref="myForm" :model="myForm" :rules="ruleCustom" :label-width="100">
			 	 <Form-item label="当前密码" prop="oldPwd">
		            <Input type="password" size="large" v-model="myForm.oldPwd"  placeholder="请输入当前密码"></Input>
		        </Form-item>
		        <Form-item label="设置新密码" prop="newPwd">
		            <Input type="password" size="large" v-model="myForm.newPwd" placeholder="请输入当前密码"></Input>
		        </Form-item>
		        <Form-item label="确认新密码" prop="passwdCheck">
		            <Input type="password" size="large" v-model="myForm.passwdCheck" placeholder="请确认新密码"></Input>
		        </Form-item>
		        <Form-item>
		            <Button type="primary" class="form-submit" @click="handleSubmit('myForm')">提交</Button>
		        </Form-item>
		    </Form>
		</div>
	</div>
</template>

<script>
import {validatePwd, checkPwd } from '@/tool/regx'
	
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '' || !checkPwd(value)) {
                callback(new Error('密码为6~18为数字字母组合'));
            } else {
                if (this.myForm.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.myForm.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '' || !checkPwd(value)) {
                callback(new Error('密码为6~18为数字字母组合'));
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
                    { validator: validatePwd, trigger: 'blur' }
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
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
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