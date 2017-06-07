<template>
	<div>
		<AHeader/>
			<div class="container clearfix">
				<img class="developing-bg" src="../../assets/other/404-error.png" alt="" />
			</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
export default {
	data () {
		return {
			
		}
	},
	mounted () {
		let vm = this
		setTimeout(function () {
			vm.$router.push('/')
		},3000)
	},
	components: {
		AHeader,
		AFooter
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../config/base.less");
.container{
	width: @mw;
	margin: 0 auto;
	text-align: center;
	min-height: 571px;
}
.developing-bg{
	display: inline-block;
	margin: 120px auto;
}
</style>