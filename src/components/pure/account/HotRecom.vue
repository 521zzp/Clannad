<template>
	<div class="hot clearfix">
			<span class="title">热门推荐</span>
			<div class="hot-group">
				<router-link to="/account" class="hot-item">
					<span class="name">惠丰年发</span>
					<div class="item-info clearfix">
						<div class="rate fl">
							<span class="value">9.60%</span>
							<span class="desc">年化收益率</span>
						</div>
						<div class="time fl">
							<span class="value">90<span>天</span></span>
							<span class="desc">投资期限</span>
						</div>
					</div>
				</router-link>
				<router-link to="/account" class="hot-item">
					<span class="name">惠丰年发</span>
					<div class="item-info clearfix">
						<div class="rate fl">
							<span class="value">9.60%</span>
							<span class="desc">年化收益率</span>
						</div>
						<div class="time fl">
							<span class="value">90<span>天</span></span>
							<span class="desc">投资期限</span>
						</div>
					</div>
				</router-link>
				<router-link to="/account" class="hot-item">
					<span class="name">惠丰年发</span>
					<div class="item-info clearfix">
						<div class="rate fl">
							<span class="value">9.60%</span>
							<span class="desc">年化收益率</span>
						</div>
						<div class="time fl">
							<span class="value">90<span>天</span></span>
							<span class="desc">投资期限</span>
						</div>
					</div>
				</router-link>
			</div>
		</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.title{
	font-size: @fz + 4;
	color: @gray-three;
}
.item-info{
	margin-top: 10px;
}
.rate .desc{
	margin-top: 10px;
}
.time .desc{
	margin-top: 14px;
}
.time{
	margin-left: 30px;
	margin-top: 5px;
}
.rate{
	width: 120px;
}
.time .value span{
	font-size: 24px;
}
.time .value{
	font-size: 30px;
}
.rate .value{
	color: @theme;
	font-size: 36px;
}
.desc{
	display: block;
}
.name{
	font-size: @fz + 4;
	margin-top: 14px;
	display: block;
}
.rate,.time{
	display: inline-block;
}
.hot-group .hot-item{
	color: @gray-three;
	overflow: hidden;
}
.hot-group:after{
	content: '';
	width: 260px;
}
.hot-group{
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	flex-direction: row;
	justify-content: space-between;
}
.hot-item:hover{
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}
.hot-item{
	display: inline-block;
	width: 260px;
	height: 170px;
	padding-left: 20px;
	margin-bottom: 10px;
	border: 1px solid @border-two;
}
.desc{
	color: @gray-one;
}
</style>