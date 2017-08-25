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
			<div v-if="total > 0" class="out-title col clearfix">
				<div class="fl one">项目名称</div>
				<div class="fl two">申请时间</div>
				<div class="fl three">转出金额</div>
				<div class="fl four">实际到账</div>
				<div class="fl five">违约金</div>
				<div class="fl six">违约利息</div>
				<div class="fl seven">状态</div>
			</div>
			<div class="out-item col" v-for="item,index in list">
				<div class="fl one name"><b>{{item.name}}</b></div>
				<div class="fl two">{{item.time}}</div>
				<div class="fl three theme-color">{{item.outMoney}}</div>
				<div class="fl four theme-color">{{item.getMoney}}</div>
				<div class="fl five theme-color">{{item.breachMoney}}</div>
				<div class="fl six theme-color">{{item.profit}}</div>
				<div class="fl seven">
					<span v-if="item.state === 1" class="uncheck">待审核</span>
					<span v-else-if="item.state === 2" class="check-no">未通过</span>
					<span v-else-if="item.state === 3" class="check-ok">审核通过</span>
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
			size: 4,
			dates: [],
			time: ["", ""]
		}
	},
	computed: {
		total () {
			return this.$store.state.accfinance.outTotal
		},
		list () {
			return this.$store.state.accfinance.outList
		},
		totalFlag () {
			return this.$store.state.accfinance.outTotalFlag
		}
	},
	mounted(){
		this.$store.dispatch('accFinanceOutTotal', { time: this.time })
	},
	watch: {
		open () {
			console.log(this.open)
		},
		totalFlag () {
			if (this.total > 0) {
				this.$store.dispatch('accFinanceOutList', { time: this.time, size: this.size, current: 1 })
			}
		}
	},
	methods: {
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
			this.$store.dispatch('accFinanceOutTotal', { time: this.time })
		},
		timeChange (value) {
			const [start, end, ...rest] = value
			this.time = [start ? start : '', end ? end : '']
			this.$store.dispatch('accFinanceOutTotal', { time: this.time })
		},
		change (current) {
			this.$store.dispatch('accFinanceOutList', { time: this.time, size: this.size, current: current })
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.uncheck{
	color: @linkc;
}
.check-ok{
	color: @success-color;
}
.check-no{
	color: @error-color;
}
.name{
	color: @gray-three;
}
.theme-color{
	color: @theme;
}
.one{
	width: 94px;
}
.two{
	width: 176px;
}
.three{
	width: 128px;
}
.four{
	width: 128px;
}
.five{
	width: 114px;
}
.six{
	width: 106px;
}
.seven{
	width: 104px;
}
.item-group{
	font-size: @fz;
	margin-top: 10px;
	margin-bottom: 20px;
}
.col>div{
	text-align: center;
}
.out-item>div{
	height: 74px;
	line-height: 75px;
	border-bottom: 1px solid @border-one;
}
.out-title>div{
	height: 46px;
	line-height: 46px;
}
.out-title{
	background-color: @border-three;
	border-top: 1px solid @border-two;
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