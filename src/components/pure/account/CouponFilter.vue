<template>
	<div>
		<div class="condition">
			<span class="condition-head">状态：</span>
			<span class="filter-btn" :class="{active: stateTap === 0}" @click="stateTapChange(0)">未使用</span>
			<span class="filter-btn" :class="{active: stateTap === 1}" @click="stateTapChange(1)">已使用</span>
			<span class="filter-btn" :class="{active: stateTap === 2}" @click="stateTapChange(2)">已过期</span>
		</div>
		<div class="rank">
			<span class="condition-head">排列：</span>
			<span class="filter-btn" :class="{active: rankTap === 1}" @click="rankTapChange(1)">按金额</span>
			<span class="filter-btn" :class="{active: rankTap === 2}" @click="rankTapChange(2)">按获取时间</span>
			<span class="filter-btn" :class="{active: rankTap === 3}" @click="rankTapChange(3)">按过期时间</span>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			stateTap: 0,
			rankTap: 1,
		}
	},
	methods: {
		stateTapChange (e) {
			this.stateTap = e
			let obj = {
				stateTap: this.stateTap,
				rankTap: this.rankTap,
			}
			console.log(1)
			console.log(obj)
			this.$emit('filterChange',obj)
		},
		rankTapChange (e) {
			this.rankTap = e
			let obj = {
				stateTap: this.stateTap,
				rankTap: this.rankTap,
			}
			this.$emit('filterChange',obj)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.rank{
	margin-top: 14px;
}
.condition-head{
	color: @gray-three;
	margin-left: 6px;
	margin-right: 38px;
}
.filter-btn{
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
.filter-btn:before{
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
.filter-btn.active{
	color: @white;
}
.filter-btn.active:before{
	transform: scale(2);
}
</style>