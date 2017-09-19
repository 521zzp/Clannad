<template>
	<div class="container">
		<BHeader/>
		<div class="content">
			<div class="center">
				<div class="form-plant fr">
					<FormOne @login="login"/>
				</div>
			</div>
		</div>
		<BFooter/>
	</div>
</template>

<script>
	import BHeader from '@/components/pure/common/BHeader'
	import BFooter from '@/components/pure/common/BFooter'
	import FormOne from '@/components/pure/login/FormOne'
	export default {
		components:{
			BHeader,
			BFooter,
			FormOne
		},
		methods:{
			login (obj) {
				this.$store.dispatch('login',obj);
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@import url("../../config/base.less");
.container{
	
}
.content{
	width: 100%;
	height: 724px;
	background-image: url('@{image}/login-regist/login-bg.jpg');
	background-position: center top;
	min-width: @mw;
	position: relative;
}
.center{
	width: @mw;
	height: 100%;
	margin: 0 auto;
}
.form-plant{
	width: 400px;
	height: 410px;
	margin-top: 95px;
	background-color: rgba(0,0,0,0.2);
}
</style>