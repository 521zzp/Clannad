<template>
	<div>
		<AHeader/>
		<div class="my-bread">
				<Breadcrumb :bread="bread"/>
		</div>
		<div class="container clearfix">
			<div class="content fr">
				<router-view></router-view>
			</div>
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
	components: {
		AHeader,
		AFooter,
		Breadcrumb,
		UserInfo,
		NavBar
	}
	
}
</script>
<style lang="less">
@import '../../config/base.less';
.user-account-common-title{
	font-size: @bfz;
	color: @gray-three;
	display: block;
}
.acc-page-wrap{
	text-align: center;
}
.acc-page-nav-center{
	display: inline-block;
}
</style>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.container{
	width: @mwsec;
	margin:0 auto;
	margin-bottom: 40px;
	min-height: 1030px;
	border:1px solid @border-two;
	background-color: #fafafa;
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
	padding: 48px 48px;
}
</style>