<template>
	<div>
		<AHeader/>
		<div class="my-bread">
				<Breadcrumb :bread="bread"/>
		</div>
		<div class="container clearfix">
			<div class="navs fl">
				<NavBar/>
			</div>
			<div class="content fr clearfix">
				<router-view></router-view>
			</div>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import NavBar from '@/components/pure/publicity/NavBar'
import Breadcrumb from '@/components/pure/common/Breadcrumb'

export default {
	data () {
		return {
			
		}
	},
	computed: {
		bread () {
			console.log(233)
			console.log(this.$store.state.publicity.bread)			
			return this.$store.state.publicity.bread
		}
	},
	components: {
		AHeader,
		Breadcrumb,
		AFooter,
		NavBar
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.container{
	width: @mwsec;
	margin:0 auto;
	margin-bottom: 40px;
}
.my-bread{
	width: @mwsec;
	margin: 10px auto;
}
.navs{
	width: 250px;
	height: 1030px;
	overflow: hidden;
	background-color: @white;
	border:1px solid @border-two;
}
.content{
	border:1px solid @border-two;
	width: 910px;
	min-height: 1030px;
	overflow: hidden;
	background-color: @white;
}
</style>