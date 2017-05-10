<template>
	<div>
		<BHeader/>
			<div class="container">
				<div class="clearfix step">
					<Steps :current="1" status="error">
				        <Step title="Step-One" content="验证手机号码"></Step>
				        <Step title="Step-Two" content="重置登陆密码"></Step>
				        <Step title="Step-Three" content="重置密码成功"></Step>
				    </Steps>
				</div>
			</div>
		<AFooter/>
	</div>
</template>

<script>
	import BHeader from '@/components/pure/common/BHeader'
	import AFooter from '@/components/pure/common/AFooter'
	export default {
		data () {
			return {
				
			}
		},
		components: {
			BHeader,
			AFooter
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
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
}
.step{
	width: 80%;
	margin-left: auto;
	margin-left: auto;
	margin-top: 50px;
}
</style>