<template>
	<div class="clearfix">
		<div class="clearfix">
			<div class="nav-title" @click="open(1)"><span>平台介绍<Icon class="title-arrow fr" :class="{open : openGroup === 1}" type="chevron-right"></Icon></span></div>
				<template v-if="openGroup === 1">
					<router-link v-for="item,index in listOne" :to="item.path" key="item.active"  :style="{animationDelay: index * 0.1 + 's'}" class="nav-item animated lightSpeedIn" :class="{active: active === item.active}">{{item.name}}</router-link>
				</template>
		</div>
		<div class="clearfix">
			<div class="nav-title"  @click="open(2)"><span>新闻与公告<Icon class="fr title-arrow" :class="{open : openGroup === 6}" type="chevron-right"></Icon></span></div>
				<template v-if="openGroup === 2">
					<router-link v-for="item,index in listTwo" :to="item.path" key="item.active"  :style="{animationDelay: index * 0.1 + 's'}" class="nav-item animated lightSpeedIn" :class="{active: active === item.active}">{{item.name}}</router-link>
				</template>
		</div>
		<div class="clearfix">
			<div class="nav-title"  @click="open(3)"><span>关于我们<Icon class="fr title-arrow" :class="{open : openGroup === 3}" type="chevron-right"></Icon></span></div>
				<template v-if="openGroup === 3">
					<router-link v-for="item,index in listThree" :to="item.path" key="item.active"  :style="{animationDelay: index * 0.1 + 's'}" class="nav-item animated lightSpeedIn" :class="{active: active === item.active}">{{item.name}}</router-link>
				</template>
				
		
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			openGroup: 1,
			listOne: [
				{
					path: '/publicity/introduce',
					active: 1,
					name: '平台介绍'
				},
				{
					path: '/publicity/systemIllustrate',
					active: 2,
					name: '系统说明'
				},
				{
					path: '/publicity/deposit',
					active: 3,
					name: '银行资金存管'
				},
				{
					path: '/publicity/provisions',
					active: 4,
					name: '风险备付金'
				},
				{
					path: '/publicity/data',
					active: 5,
					name: '平台数据'
				},
				{
					path: '/publicity/safeConduct',
					active:6,
					name: '安全保障'
				},
			],
			listTwo: [
				{
					path: '/publicity/announcement',
					active: 7,
					name: '惠宝公告'
				},
				{
					path: '/publicity/news',
					active:8,
					name: '惠宝新闻'
				},
			],
			listThree: [
				{
					path: '/app',
					active: 10,
					name: 'APP下载'
				},
				{
					path: '/guide',
					active: 9,
					name: '新手引导'
				},
				{
					path: '/publicity/aptitude',
					active: 11,
					name: '荣誉资质'
				},
				{
					path: '/publicity/serviceNote',
					active: 12,
					name: '服务说明'
				},
				{
					path: '/publicity/partner',
					active: 13,
					name: '合作伙伴'
				},
				{
					path: '/publicity/contactUs',
					active:14,
					name: '联系我们'
				},
				{
					path: '',
					active:15,
					name: '加入我们'
				},
			],
		}
	},
	computed: {
		active () {
			return this.$route.matched[1].meta.pubBar 
		}
	},
	methods: {
		open (index) {
			this.openGroup = this.openGroup === index ? 0 : index
		}
	}
	
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