<template>
	<div>
		<AHeader/>
		<div class="container clearfix">
			<div class="top">
				<div class="top-bg"></div>
				<div class="top-selector">
					<span>排序：</span>
					<span class="con r-dashed" :class="{active: rankWay === 1}" @click="rankDefault">默认排序</span>
					<span class="con r-dashed" :class="rmclass" @click="rankMoney">投资金额<Icon size="30" type="ios-arrow-thin-up"></Icon></span>
					<span class="con r-dashed" :class="rtclass" @click="rankTime">期限<Icon size="30" type="ios-arrow-thin-up"></Icon></span>
					<span class="con r-dashed" :class="rrclass" @click="rankRate">年利率<Icon size="30" type="ios-arrow-thin-up"></Icon></span>
				</div>
			</div>
			<!--热门部分-->
			<HotPro :hot="main" :time="countSec"/>
			
			<!--列表部分-->
			<ProList :products="products()"/>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import ProList from '@/components/pure/procenter/ProList'
import HotPro from '@/components/pure/procenter/HotPro'
import {countDownSec, countDownMiliSec} from '@/tool/date'
import {rankMD, rankMU, rankTD, rankTU, rankRD, rankRU} from '@/tool/sort'
export default {
	components:{
		AHeader,
		AFooter,
		HotPro,
		ProList
	},
	data () {
		return {
			rankWay: 1,
			rankM: false, //false 表示降序
			rankT: false,
			rankR: false,
			sortWay: 1,  //1: 默认排序， 2：投资金额降序， 3： 投资金额升序， 4： 购买期限降序， 5.：购买期限升序， 6.： 利率降序， 7.： 利率升序
			taps: [
				{
					tap: '新手礼包',
					color: '#ff9a4e'
				},
				{
					tap: '秒杀',
					color: '#98d1ff'
				}
			]
		}
	},
	computed: {
		rmclass () {
			return {
				active: this.rankWay === 2,
				down: this.rankM
			}
		},
		rtclass () {
			return {
				active: this.rankWay === 3,
				down: this.rankT
			}
		},
		rrclass () {
			return {
				active: this.rankWay === 4,
				down: this.rankR
			}
		},
		countSec () {
			let timeObj = null;
			let secKilling = false;
			if (this.$store.state.home.main.startMilliseconds > 0 ) {
				if (this.$store.state.home.main.startMilliseconds > this.$store.state.home.main.startMillFlag) {
					secKilling = false
					timeObj =  countDownSec(this.$store.state.home.main.startMilliseconds)
				} else{
					secKilling = true
					timeObj = countDownMiliSec(this.$store.state.home.main.startMilliseconds)
				}
			} else {
				if (this.$store.state.home.main.endMilliseconds > this.$store.state.home.main.endMillFlag) {
					secKilling = false
					timeObj = countDownSec(this.$store.state.home.main.endMilliseconds)
				} else{
					secKilling = true
					timeObj = countDownMiliSec(this.$store.state.home.main.endMilliseconds)
				}
			}
			return Object.assign(timeObj, {secKilling: secKilling})
		},
		main () {
			return this.$store.state.home.main
		}
	},
	mounted () {
		this.$store.dispatch('homeProducts')
	},
	methods: {
		products () {
			if (this.rankWay === 1) {
				return this.$store.state.home.products
			}else if (this.rankWay === 2) {
				if (this.rankM) {
					return this.$store.state.home.products.slice(0).sort(rankMD)
				} else{
					return this.$store.state.home.products.slice(0).sort(rankMU)
				}
			}else if (this.rankWay === 3) {
				if (this.rankT) {
					return this.$store.state.home.products.slice(0).sort(rankTD)
				} else{
					return this.$store.state.home.products.slice(0).sort(rankTU)
				}
			}else if (this.rankWay === 4) {
				if (this.rankR) {
					return this.$store.state.home.products.slice(0).sort(rankRD)
				} else{
					return this.$store.state.home.products.slice(0).sort(rankRU)
				}
			}
		},
		rankDefault () {
			this.rankWay = 1;
		},
		rankMoney () {
			if (this.rankWay === 2) {
				this.rankM = !this.rankM
			}
			this.rankWay = 2
		},
		rankTime () {
			if (this.rankWay === 3) {
				this.rankT = !this.rankT
			}
			this.rankWay = 3
		},
		rankRate () {
			if (this.rankWay === 4) {
				this.rankR = !this.rankR
			}
			this.rankWay = 4
		}
	}
}
</script>

<style lang="less">
@import '../../config/base.less';
.i-p-progress{
	cursor: pointer;
}
.i-p-progress .ivu-progress-bg{
	background-color: @theme !important;
	border-radius: 0px;
}
.i-p-progress .ivu-progress-inner{
	background-color: @border-two;
	border-radius: 0px;
}
</style>

<style lang="less" scoped="scoped">
@import '../../config/base.less';

.container{
	width: 1020px;
	margin-top: 40px;
	margin-left: auto;
	margin-right: auto;
}
.taps{
	display: inline-block;
}
.taps span{
	border-radius: @bbr;
	background-color: deepskyblue;
	color: @white;
	padding: 2px 5px;
	vertical-align: 3px;
	margin-right: 10px;
}
.min{
	display: block;
	text-align: center;
	color: @border-one;
}
.buy{
	margin-right: 45px;
}
.buy button.unable{
	background-color: @border-one;
	border: 1px solid @border-one;
	cursor: not-allowed;
}
.buy button{
	margin-top: 10px;
	width: 134px;
	height: 44px;
	font-size: @bfz;
	background-color: @theme;
	border: 1px solid @theme;
	border-radius: @br;
	cursor: pointer;
	color: @white;
}
.day .value{
	color: @gray-three;
}
.rate .value,.money .value{
	color: @theme;
}
.value span{
	font-size: @fz + 6;
}
.value{
	font-size: @fz * 2;
}
.item-info .fl{
	margin-top: 18px;
}
.rate,.day,.money{
	margin-right: 90px;
}
.rate{
	margin-left: 32px;
}
.sec>span{
	display: block;
}
.sec .desc{
	font-size: @fz;
	color: @gray-one;
}
.name{
	font-size: 20px;
	color: @gray-three;
	margin-left: 30px;
}
.pro-item.seckill-pro{
	height: 154px;
	border: 2px solid @theme;
}
.pro-item{
	height: 150px;
	margin-bottom: 20px;
	background-color: @white;
	position: relative;
	border: 1px solid @border-two;
}
.t-o{
	font-size: 32px;
	border: 1px solid #fffc01;
	border-radius: @br;
	padding: 2px 4px 2px 5px;
	margin-right: 5px;
}
.clock{
	margin-top: 10px;
	margin-left: 50px;
}
.item-title{
	margin-top: 10px;
}
.time-area{
	color: @white;
	font-size: @fz + 12;
	margin-left: 50px;
	float: left;
}
.time-count{
	height: 76px;
	line-height: 76px;
	margin-top: 20px;
	background-color: #ff7f7c;
}
.seckill-sym{
	display:table-cell;
	margin-left: 40px;
	margin-top: 10px;
}
.top{
	height: 200px;
	border: 1px solid @border-two;
}
.r-dashed{
	border-right: 1px dashed @gray-one;
}
.top-selector .con{
	padding: 0 20px;
	cursor: pointer;
}
.top-selector span i{
	vertical-align: -5px;
	margin-left: 10px;
	transition: transform .5s;
}
.top-selector .con:hover{
	color: @theme;
}
.top-selector .down i{
	transform: rotateZ(180deg);
}
.top-selector .active{
	color: @theme;
}
.top-selector{
	height: 48px;
	font-size: @bfz;
	color: @gray-one;
	line-height: 48px;
	padding-left: 32px;
}
.top-bg{
	height: 150px;
	border-bottom: 2px solid @theme;
	background-image: url('@{image}/pro-center/top-bg.png');
	background-size: cover;
}
</style>