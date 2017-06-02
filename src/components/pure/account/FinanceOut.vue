<template>
	<div class="clearfix finance-on">
		<div class="condition clearfix">
			<span class="time-btn" :class="{active: selectTap === 1}" @click="selectTapChange(1)">全部</span>
			<span class="time-btn" :class="{active: selectTap === 2}" @click="selectTapChange(2)">近一周</span>
			<span class="time-btn" :class="{active: selectTap === 3}" @click="selectTapChange(3)">近15天</span>
			<span class="time-btn" :class="{active: selectTap === 4}" @click="selectTapChange(4)">近1个月</span>
			<div class="time-picker fr">
				日期<Date-picker class="data-input" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
			</div>
		</div>
		<div class="clearfix item-group">
			<div class="out-title col clearfix">
				<div class="fl one">项目名称</div>
				<div class="fl two">申请时间</div>
				<div class="fl three">转出金额</div>
				<div class="fl four">实际到账</div>
				<div class="fl five">违约金</div>
				<div class="fl six">违约利息</div>
				<div class="fl seven">状态</div>
			</div>
			<div class="out-item col" v-for="item,index in list">
				<div class="fl one name"><b>惠丰年发</b></div>
				<div class="fl two">2017-05-17 13:36:18</div>
				<div class="fl three theme-color">9000</div>
				<div class="fl four theme-color">8000</div>
				<div class="fl five theme-color">8000</div>
				<div class="fl six theme-color">500</div>
				<div class="fl seven">
					<!--<span class="uncheck">待审核</span>-->
					<span class="check-ok">审核通过</span>
					<!--<span class="check-no">未通过</span>-->
				</div>
			</div>
		</div>
		<div class="acc-page-wrap">
    		<Page :total="400" size="small" class="acc-page-nav-center"></Page>
    	</div>
	</div>
</template>

<script>
export default{
	data () {
		return {
			selectTap: 1,
			list: [1, 2, 3, 4, 5, 6, ]
		}
	},
	watch: {
		open () {
			console.log(this.open)
		}
	},
	methods: {
		selectTapChange (index) {
			this.selectTap = index
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