<template>
	<ul class="group">
		<li class="item animated flipInY"" v-for="item,index in list" key="index + 1" :class="{unuse: item.state !== 0}" :style="{animationDelay: index * 0.1 + 's'}">
			<div class="info fl">
				<div class="info-desc clearfix">
					<div class="money fl"><span class="moeny-unit">￥</span><span class="money-value">{{item.value}}</span></div>
					<div class="desc fr">
						<span class="name">{{item.name}}</span>
						<span class="remarks">{{item.remarks}}</span>
					</div>
				</div>
				<span class="time">{{item.getTime}} 至  {{item.overdueTime}}</span>
				<span class="left-time">{{"剩余"+item.day+"天过期"}}</span>
			</div>
			<template v-if="trade">
				<router-link v-if="item.state === 0"  to="/"  class="fr use" >
					<span>立即使用</span>
				</router-link>
				<span v-else-if="item.state === 1"  to="/"  class="fr use" >
					<span  class="unuse">已使用</span>
				</span>
				<span v-else-if="item.state === 2"  to="/"  class="fr use" >
					<span class="unuse">{{item.unuse}}</span>
				</span>
			</template>
			<router-link v-else  to="/app"  class="fr use" >
					<span class="unable-to-app">APP使用</span>
			</router-link>
			<div class="sawtooth">
				<div></div><div></div><div></div><div></div><div></div>
				<div></div><div></div><div></div><div></div><div></div>
			</div>
			<div v-if="item.state === 2" class="overdus-stamp"></div>
		</li>
	</ul>
</template>

<script>
	
export default {
	props: ['list'],
	data () {
		return {
			
		}
	},
	computed: {
		trade () {
			return this.$store.state.trade
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.use .unable-to-app{
	word-break: break-all;
	margin-top: 15px;
}
.overdus-stamp{
	position: absolute;
	right: 48px;
	width: 72px;
	height: 72px;
	background-image: url(../../../assets/account/coupon-overdue.png);
}
.use>span.unuse{
	margin-top: 40px;
}
.use>span{
	width: 1em;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 25px;
}
.use{
	width: 47px;
	font-size: 20px;
	height: 100%;
	color: #ff726b;
}
.left-time{
	font-size: @fz;
	margin-top: 12px;
	color: #fdf5af;
	margin-left: 28px;
	display: block;
}
.time{
	margin-left: 28px;
	display: block;
	margin-top: 12px;
}
.name{
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: @fz;
}
.remarks{
	margin-top: 5px;
	display: block;
	height: 50px;
	line-height: 1.5;
	overflow: hidden;
}
.desc{
	width: 150px;
	margin-right: 24px;
}
.money-value{
	font-size: 40px;
}
.moeny-unit{
	vertical-align: 2px;
}
.money{
	display: inline-block;
	width: 166px;
	height: 100%;
	line-height: 80px;
	font-size: 30px;
	color: #fdf5af;
	text-align: center;
}
.info-desc{
	height: 80px;
}
.item{
	position: relative;
	width: 388px;
	height: 182px;
	color: @white;
	overflow: hidden;
	border: 1px solid #ff726b;
	border-left: none;
	margin-bottom: 40px;
}
.item.unuse{
	filter: grayscale(100%);
}
.info{
	height: 100%;
	padding-top: 30px;
	width: 340px;
	background-color: #ff726b;
}
.group{
	padding-top: 36px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow: hidden;
}

.sawtooth{
	height: 100%;
	position: absolute;
	left: -5px;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
}
.sawtooth>div{
	width: 10px;
	height: 10px;
	background-color: @white;
	border-radius: 50%;
	margin: 5px 0;
}
</style>