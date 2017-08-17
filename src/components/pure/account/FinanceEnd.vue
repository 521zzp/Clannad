<template>
	<div class="clearfix finance-on">
		<div class="condition clearfix">
			<span class="time-btn" :class="{active: selectTap === 1}" @click="selectTapChange(1)">全部</span>
			<span class="time-btn" :class="{active: selectTap === 2}" @click="selectTapChange(2)">近一周</span>
			<span class="time-btn" :class="{active: selectTap === 3}" @click="selectTapChange(3)">近15天</span>
			<span class="time-btn" :class="{active: selectTap === 4}" @click="selectTapChange(4)">近1个月</span>
			<div class="time-picker fr">
				日期<Date-picker class="data-input" v-model="dates" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px" @on-change="timeChange"></Date-picker>
			</div>
		</div>
		<div class="clearfix item-group">
			<div v-for="item,index in list" class="on-item clearfix animated flipInX" :style="{animationDelay: index * 0.1 + 's'}">
				<div v-if="index % 2 === 0" class="seckill-tap"></div>
				<div v-if="index % 2 === 0"  class="fin-end fin-end-date"></div>
				<div v-else class="fin-end fin-end-out"></div>
				<div class="chief clearfix">
					<div class="c-head fl">
						<div class="head-box">
							<span class="c-h-name">{{item.name}}</span>
							<span class="c-h-time">到期：{{item.eTime}}</span>
						</div>
					</div>
					<div class="c-body clearfix fl">
						<div class="money fl">
							<span class="value">{{item.profit}}</span>
							<span class="desc">收益金额（元）</span>
						</div>
						<div class="rate fl">
							<span class="value">{{item.rate}}%</span>
							<span class="desc">年化收益率</span>
						</div>
						<div class="freeze fl">
							<span class="value">{{item.freeze}}</span>
							<span class="desc">冻结金额（元）</span>
						</div>
					</div>
					<div class="c-tail fr">
						<span class="info-btn" @click="flodOpen(index)">查看详情<Icon class="arrow-icon" :class="{open : open === index}"  type="ios-arrow-down"></Icon></span>
					</div>
				</div>
				<div class="other clearfix" :class="{open : open === index}">
					<div class="other-time fl">
						<span>购买时间：{{item.bTime}}</span>
						<span>到期时间：{{item.eTime}}</span>
					</div>
					<div class="day-money fl">
						<span>产品期限（天）：<span>{{item.day}}</span></span>
						<span >购买金额（元）：<span>{{item.money}}</span></span>
					</div>
					<div class="o-operate fr">
						<router-link to="/account/financing" class="contract">理财协议</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="acc-page-wrap">
    		<Page :total="total" size="small" class="acc-page-nav-center" @on-change="change"></Page>
    	</div>
	</div>
</template>

<script>
export default{
	data () {
		return {
			selectTap: 1,
			open: -1,
			size: 4,
			dates: [],
			time: []
		}
	},
	computed: {
		total () {
			return this.$store.state.accfinance.endTotal
		},
		list () {
			return this.$store.state.accfinance.endList
		}
	},
	watch: {
		open () {
			console.log(this.open)
		},
		total () {
			this.$store.dispatch('accFinanceList', { type: 1, time: this.time, size: this.size, current: 1 })
		}
	},
	methods: {
		flodOpen (index) {
			this.open = this.open == index ? -1 : index
		},
		selectTapChange (index) {
			let start = new Date()
			let end = new Date()
			switch (index){
				case 2:
					start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
					break;
				case 3:
					start.setTime(start.getTime() - 3600 * 1000 * 24 * 15)
					break;
				case 4:
					start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
					break;
				default:
					start = null
					end = null
					break;
			}
			this.dates = [start, end]
			this.selectTap = index
			this.time = [start ? start.Format('yyyy-MM-dd') : '', end ? end.Format('yyyy-MM-dd') : '']
			this.$store.dispatch('accFinanceTotal', { type: 1, time: this.time })
		},
		timeChange (value) {
			const [start, end, ...rest] = value
			this.time = [start ? start : '', end ? end : '']
			this.$store.dispatch('accFinanceTotal', { type: 1, time: this.time })
		},
		change (current) {
			this.$store.dispatch('accFinanceList', { type: 1, time: this.time, size: this.size, current: current })
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.finance-on{
	min-height: 500px;
}
.fin-end{
	position: absolute;
	width: 72px;
	height: 72px;
	right: 0;
}
.fin-end-date{
	background-image: url(../../../assets/account/fin-end-date.png);
}
.fin-end-out{
	background-image: url(../../../assets/account/fin-end-out.png);
}
.seckill-tap{
	width: 48px;
	height: 48px;
	left: 4px;
	position: absolute;
	background-image: url(../../../assets/product-center/i-icon-gray.png);
}
.o-operate{
	width: 80px;
	margin-right: 32px;
	text-align: center;
}
.other.open{
	max-height: 160px;
}
.apply-out{
	margin-top: 14px;
	display: inline-block;
}
.contract{
	color: @white;
	background-color: @gray-one;
	display: block;
	width: 80px;
	height: 30px;
	line-height: 30px;
	border-radius: @br;
	border: 1px solid @gray-one;
}
.day-money>span{
	display: block;
	margin-bottom: 20px;
}
.day-money{
	margin-left: 180px;
	padding-top: 8px;
}
.other{
	max-height: 0;
	overflow: hidden;
	line-height: 1;
	margin-top: 22px;
	font-size: @fz;
	transition: max-height 1s cubic-bezier(.8, 2, .2, 1.4); 
}
.other-time>span{
	display: block;
	margin-bottom: 20px;
}
.other-time{
	margin-left: 20px;
	padding-top: 8px;
	margin-bottom: 30px;
}
.arrow-icon.open{
	transform: rotateZ(180deg);
}
.arrow-icon{
	color: @gray-one;
	margin-left: .5em;
	transition: transform .3s;
}
.info-btn{
	cursor: pointer;
}
.c-tail{
	margin-right: 26px;
	margin-top: 84px;
}
.head-box{
	height: 106px;
	border-right: 1px dashed @border-two;
	overflow: hidden;
	width: 100%;
}
.on-item{
	font-size: @sfz;
	color: @gray-one;
	position: relative;
}
.c-h-time{
	margin-top: 26px;
	display: block;
}
.c-h-name{
	margin-top: 26px;
	display: block;
	font-size: @fz+ 4;
	color: @gray-three;
}
.money, .rate, .freeze{
	height: 100%;
	width: 176px;
}
.value{
	font-size: 28px;
	margin-top: 36px;
}
.desc{
	margin-top: 24px;
}
.c-body>div>span{
	line-height: 1;
	display: block;
	text-align: center;
}
.c-head{
	height: 142px;
	width: 174px;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.item-group{
	margin-top: 12px;
}
.chief{
	height: 142px;
	line-height: 1;
	border: 1px solid @border-two;
	border-left: 4px solid @gray-one;
	background-color: @border-three;
	color: @gray-one;
}
.time-btn{
	display: inline-block;
	width: 70px;
	height: 22px;
	color: @gray-one;	
	line-height: 22px;
	border-radius: 11px;
	overflow: hidden;
	cursor: pointer;
	text-align: center;
	margin-right: 14px;
	position: relative;
	vertical-align: middle;
}
.condition{
	line-height: 32px;
}
.data-input{
	margin-left: 10px;
	margin-right: 10px;
	display: inline-block;
}
.time-btn:hover{
	color: @theme;
}
.time-btn:before{
	display: block;
	content: "";
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #98d1ff;
	border-radius: 11px;
	transform: scale(0);
	transition-property: transform;
	transition-duration: 0.5s;
	transition-timing-function: ease-out;
}
.time-btn.active{
	color: @white;
}
.time-btn.active:before{
	transform: scale(2);
}

</style>