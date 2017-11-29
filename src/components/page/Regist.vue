<template>
	<div>
		<BHeader/>
		<div class="content">
			<span class="to-login fr">已有账户？ <router-link to="/login" class="to-regist">立即登陆</router-link></span>
			<RegistForm/>
		</div>
		<BFooter/>
	</div>
</template>

<script>
import BHeader from '@/components/pure/common/BHeader'
import BFooter from '@/components/pure/common/BFooter'
import RegistForm from '@/components/pure/regist/RegistForm'
import { isPc } from '@/tool/tool'
export default {
	components:{
		BHeader,
		BFooter,
		RegistForm
	},
	beforeRouteEnter (to, from, next) {
		const invitor = to.query.invitor
		if (!isPc()) {
			if (invitor) {
				window.location = 'http://m.shangnongtou.com/register?invitor=' + invitor
			} else{
				window.location = 'http://m.shangnongtou.com/register'
			}
		} else {
			next()
		}
	},
	created() {
		//this.$router.push('/')
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.content{
	width: 1200px;
	height: 722px;
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
	background-color: #FFFFFF;
	border-radius: @bbr;
	overflow: hidden;
}
.to-login{
	font-size: @fz;
	margin-top:20px;
	margin-right:20px;
}
</style>