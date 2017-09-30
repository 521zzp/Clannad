<template>
	<article>
		<h3 class="title">平台介绍</h3>
		
		<p class="section">
			掌柜金服成立于2015年5月27日,隶属于上海蓬宝互联网金融信息服务有限公司，是一家国内专业提供融资需求撮合业务的平台。公司集线上多元化融资业务于一体，
			为小微企业、金融机构以及个人提供专业、透明、高效的金融信息服务。掌柜金服以“金融，让生活更美好”的核心理念，
			建立了完善的涵盖各类业务操作流程的风险管理体系及运营体系，为投资人创造安全、稳定的资产增值服务。 
		</p>

      	<p  class="section">
      		掌柜金服本着“立足金融，服务大众”的经营理念，为不同领域企业及高净值客户提供信息咨询、信用评估、资产配置方案、理财规划等全方位的优化金融服务。
      		掌柜金服，从创始至今就懂得了“诚信方能汇通天下”的生存之道。同时，我们持续完善产品存续期管理服务、改进产品研发设计、提升产品甄选能力，力求为客户提供完美的服务品质。
      	</p>

  		<p  class="section">
  			掌柜金服从源头上对产品风险进行把控，为投资人创造了安全、稳定的资产增值收益，将诚信、专业和创新的服务带给每一位客户，是中国大众阶层长期可信赖的综合金融信息服务平台。
  		</p>

		
	</article>
</template>

<script>
import {IMG} from '@/config/url'
export default {
	data () {
		return {
			img: IMG + '/publicity/yhb-illustrate.png' 
		}
	},
	mounted () {
		let bread = [
				{
					name: '掌柜金服',
					url: '/'
				},
				{
					name: '信息披露',
					url: '/publicity/introduce'
				},
				{
					name: '平台介绍',
					url: ''
				},
			];
		this.$store.dispatch('publicityBreadChange', bread)
		this.$store.dispatch('publicityNavChange', 1)
	},
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

article{
	font-size: @fz;
	padding: 20px;
	
}
.title{
	display: block;
	text-align: center;
	width: 100%;
	margin: 40px auto;
}
.section{
	color: @gray-one;
	text-indent: 2em;
	letter-spacing: .05em;
}
</style>