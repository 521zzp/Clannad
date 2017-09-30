<template>
	<div>
		<CHeader  class="guide-title"/>
		<div class="content"></div>
		<AFooter/>
	</div>
</template>

<script>
import CHeader from '@/components/pure/common/CHeader'
import AFooter from '@/components/pure/common/AFooter'
export default {
	data () {
		return {
		}
	},
	components: {
		CHeader,
		AFooter
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../config/base.less';
.content{
	height: 4000px;
	background-image: url('@{image}/publicity/app-download.png');
	background-position: center;
	min-width: @minw;
	margin-top: 60px;
}
.guide-title{
	position: fixed;
	top: 0;
	z-index: 1;
}
</style>