<template>
	<div>
		<AHeader/>
		<div class="clearfix container-wrap">
			<div class="my-bread only-agent-center-bread">
					<Breadcrumb :bread="bread"/>
			</div>
			<div class="container clearfix">
				<div class="content fr">
					<router-view></router-view>
				</div>
				<div class="navs fl">
					<AgentInfo class="user-info"/>
					<NavBar/>
				</div>
			</div>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import AgentInfo from '@/components/pure/agent/AgentInfo'
import Breadcrumb from '@/components/pure/common/Breadcrumb'
import NavBar from '@/components/pure/agent/NavBar'

export default {
	data () {
		return {
			
		}
	},
	components: {
		AHeader,
		AFooter,
		AgentInfo,
		NavBar,
		Breadcrumb
	},
	computed: {
		bread () {
			return this.$store.state.account.bread
		}
	},
}
</script>

<style lang="less">
@import '../../config/base.less';
.agent-common-title{
	font-size: @bfz;
	color: @gray-three;
	display: block;
}
</style>
<style lang="less">
@import '../../config/base.less';
.only-agent-center-bread .ivu-breadcrumb a{
	color: @white;
}
.only-agent-center-bread .ivu-breadcrumb > span:last-child{
	color: #f7f7f7;
}
.only-agent-center-bread .ivu-breadcrumb a:hover{
	color: @theme;
}
</style>
<style scoped="scoped" lang="less">
@import '../../config/base.less';
.container-wrap .my-bread{
	margin: 0 auto ;
	padding: 10px 0;
	color: @white !important;
}
.container-wrap{
	padding-bottom: 40px;
	background-image: url('@{image}/agent/agent-center-bg.png');
}
.container{
	width: @mwsec;
	margin:0 auto;
	min-height: 1030px;
	border:1px solid @border-two;
	background-color: #fafafa;
}
.my-bread{
	width: @mwsec;
	margin: 10px auto;
}
.navs{
	width: 268px;
}
.user-info{
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid @border-two; 
}
.content{
	width: 910px;
	min-height: 1030px;
	background-color: @white;
	border-left: 1px solid @border-two; 
	padding: 48px 48px;
}
</style>