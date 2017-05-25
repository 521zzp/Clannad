<template>
	<div class="clearfix">
		<div class="clearfix">
			<div class="nav-title" @click="openGroup = 1"><span>平台介绍<Icon class="title-arrow fr" :class="{open : openGroup === 1}" type="chevron-right"></Icon></span></div>
				<template v-if="open === 1">
					<router-link to="/publicity/systemIllustrate"  style="animation-delay: 0s;" class="nav-item animated lightSpeedIn" :class="{active: active === 1}">系统说明</router-link>
					<router-link to="/publicity/deposit"  style="animation-delay: .1s;" class="nav-item animated lightSpeedIn" :class="{active: active ===2}">银行资金存管</router-link>
					<router-link to="/publicity/provisions"  style="animation-delay: .2s;" class="nav-item animated lightSpeedIn" :class="{active: active ===3}">风险备付金</router-link>
					<router-link to="/publicity/data"  style="animation-delay: .3s;" class="nav-item animated lightSpeedIn" :class="{active: active ===4}">平台数据</router-link>
					<router-link to="/publicity/safeConduct"  style="animation-delay: .4s;" class="nav-item animated lightSpeedIn" :class="{active: active ===5}">安全保障</router-link>
				</template>
		</div>
		<div class="clearfix">
			<div class="nav-title"  @click="openGroup = 2"><span>新闻与公告<Icon class="fr title-arrow" :class="{open : openGroup === 6}" type="chevron-right"></Icon></span></div>
				<template v-if="open === 2">
					<router-link to="" style="animation-delay: 0s;" class="nav-item animated lightSpeedIn" :class="{active: active === 7}">惠宝公告</router-link>
					<router-link to="" style="animation-delay: .1s;" class="nav-item animated lightSpeedIn" :class="{active: active === 8}">惠宝新闻</router-link>
				</template>
		</div>
		<div class="clearfix">
			<div class="nav-title"  @click="openGroup = 3"><span>关于我们<Icon class="fr title-arrow" :class="{open : openGroup === 3}" type="chevron-right"></Icon></span></div>
				<template v-if="open === 3">
					<router-link to=""  style="animation-delay: 0s;" class="nav-item animated lightSpeedIn">新手引导</router-link>
					<router-link to=""  style="animation-delay: .1s;" class="nav-item animated lightSpeedIn">APP下载</router-link>
					<router-link to="/publicity/aptitude"  style="animation-delay: .2s;" class="nav-item animated lightSpeedIn" :class="{active: active === 10}">荣誉资质</router-link>
					<router-link to="/publicity/serviceNote"  style="animation-delay: .3s;" class="nav-item animated lightSpeedIn" :class="{active: active === 11}">服务说明</router-link>
					<router-link to="/publicity/partner"  style="animation-delay: .4s;" class="nav-item animated lightSpeedIn" :class="{active: active === 12}">合作伙伴</router-link>
					<router-link to="/publicity/contactUs"  style="animation-delay: .5s;" class="nav-item animated lightSpeedIn" :class="{active: active === 13}">联系我们</router-link>
					<router-link to=""  style="animation-delay: .6s;" class="nav-item animated lightSpeedIn">加入我们</router-link>
				</template>
				
		
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			openGroup: 1
		}
	},
	computed: {
		active () {
			return this.$route.matched[1].meta.pubBar 
		},
		open () {
			return this.openGroup
		}
	},
	
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.title-arrow.open{
	transform: rotateZ(90deg);
}
.title-arrow{
	transition: transform .3s;
}
.nav-title{
	height: 70px;
	line-height: 70px;
	font-size: @fz + 4;
	cursor: pointer;
	border-left: 4px solid @theme;
	padding-left:38px;
	padding-right: 18px;
	border-bottom: 1px solid @border-two;
}
.nav-item:hover,.nav-item.active{
	background-color: #ffe4d9;
	color: @theme;
}
.nav-item{
	height: 50px;
	font-size: @bfz;
	color: @gray-three;
	padding-left: 38px;
	display: block;
	background-color: @border-three;
	border-bottom: 1px solid @border-two;
	line-height: 50px;
}
.nav-title>span{
	display: inline-block;
	width: 100%;
	vertical-align: middle;
	line-height: 1;
}
.title-arrow{
	vertical-align: middle;
}

</style>