<template>
	<div>
		<AHeader/>
		<div class="my-bread">
				<Breadcrumb :bread="bread"/>
		</div>
		<div class="container clearfix">
			<div class="content fr"></div>
			<div class="navs fl">
				<UserInfo class="user-info"/>
				<NavBar/>
			</div>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import Breadcrumb from '@/components/pure/account/Breadcrumb'
import UserInfo from '@/components/pure/account/UserInfo'
import NavBar from '@/components/pure/account/NavBar'
export default {
	data () {
		return {
			
		}
	},
	computed: {
		bread () {
			return this.$store.state.account.bread
		}
	},
	created () {
		let bread = [
				{
					name: '余惠宝首页',
					url: '/'
				},
				{
					name: '账户总览',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
	},
	components: {
		AHeader,
		AFooter,
		Breadcrumb,
		UserInfo,
		NavBar
	}
	
}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.container{
	width: @mwsec;
	margin:0 auto;
	min-height: 1030px;
	border:1px solid @border-two;
}
.my-bread{
	width: @mwsec;
	margin: 10px auto;
}
.navs{
	width: 228px;
}
.user-info{
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid @border-two; 
}
.content{
	width: 950px;
	min-height: 1030px;
	background-color: @white;
	border-left: 1px solid @border-two; 
}
</style>