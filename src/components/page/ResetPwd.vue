<template>
	<div>
		<BHeader/>
			<div class="container">
				<div class="clearfix step">
					<Steps :current="step" :status="status">
				        <Step title="第一步" content="验证手机号码"></Step>
				        <Step title="第二步" content="重置登陆密码"></Step>
				        <Step title="第三步" content="重置密码成功"></Step>
				    </Steps>
				</div>
				<StepOne v-if="step === 0" :text="text" @sendCode="sendCode" @submit="resetPwdOne" @tempRestore="tempRestore"/>
				<StepTwo v-if="step === 1" @submit="resetPwdTwo"/>
				<StepThree v-if="step === 2" />
			</div>
		<BFooter/>
	</div>
</template>

<script>
	import BHeader from '@/components/pure/common/BHeader'
	import BFooter from '@/components/pure/common/BFooter'
	import StepOne from "@/components/pure/resetpwd/StepOne"
	import StepTwo from "@/components/pure/resetpwd/StepTwo"
	import StepThree from "@/components/pure/resetpwd/StepThree"
	
	export default {
		data () {
			return {
				state: {
					account:'',
					phoneCode:''
				}
			}
		},
		computed: {
			status () {
				return this.$store.state.resetpwd.status
			},
			text () {
        		return this.$store.state.resetpwd.text
       		},
			step () {
				return this.$store.state.resetpwd.step
			}
		},
		methods: {
			sendCode (obj) {
				this.$store.dispatch('resetPwdSendCode', obj)
			},
			resetPwdOne (obj) {
				this.$store.dispatch('resetPwdOne',obj)
			},
			resetPwdTwo (obj) {
				this.$store.dispatch('resetPwdTwo',Object.assign(this.state, obj))
			},
			tempRestore (obj) {
				this.state = obj;
			}
		},
		components: {
			BHeader,
			BFooter,
			StepOne,
			StepTwo,
			StepThree
		}
	}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.container{
	width: @mw;
	height: 724px;
	border: 1px solid @border-one;
	background-color: @white;
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
}
.step{
	width: 80%;
	margin-left: auto;
	margin-top: 50px;
}
</style>