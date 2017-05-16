<template>
	<div>
		<div class="head clearfix">
			<img class="head-img fl" :src="img" alt="" />
			<div class="head-info fl">
				<span class="name">音无结弦</span>
				<span v-if="$store.state.user.level === '会员'"  class="level">会员</span>
				<span class="level">普通</span>
			</div>
		</div>
		<div class="infos clearfix">
			<router-link to="/product" class="info-item fl id-card"></router-link>
			<router-link to="/product" class="info-item fl bank-acrd"></router-link>
			<router-link to="/product" class="info-item fl pay-pwd"></router-link>
			<router-link to="/product" class="info-item fl assurance"></router-link>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			img: this.$store.state.user.img
		}
	},
	computed: {
		
	}
}
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';

.head{
	height: 120px;
}
.assurance.active{
	background-image: url(../../../assets/account/s-four-act.png);
}
.assurance{
	background-image: url(../../../assets/account/s-four-def.png);
}
.pay-pwd.active{
	background-image: url(../../../assets/account/s-three-act.png);
}
.pay-pwd{
	background-image: url(../../../assets/account/s-three-def.png);
}
.bank-acrd.active{
	background-image: url(../../../assets/account/s-two-act.png);
}
.bank-acrd{
	background-image: url(../../../assets/account/s-two-def.png);
}
.id-card.active{
	background-image: url(../../../assets/account/s-one-act.png);
}
.id-card{
	margin-left: 28px;
	background-image: url(../../../assets/account/s-one-def.png);
}
.info-item{
	margin-right: 20px;
	display: inline-block;
	margin-top: 10px;
	margin-bottom: 20px;
	width: 28px;
	height: 28px;
}
.head-img{
	width: 78px;
	height: 78px;
	margin-left: 32px;
	margin-top: 32px;
	border: 2px solid @border-two;
	border-radius: 50%;
	display: inline-block;
	background-image: url(../../../assets/home/agent-default.png);
	background-size: 100% 100%;
}
.name{
	padding-left: .5em;
	margin-bottom: 6px;
}
.head-info{
	display: inline-block;
	margin-top: 50px;
	margin-left: 12px;
	color: @gray-three;
}
.name{
	display: block;
}
.level.vip{
	background-image: url(../../../assets/account/vip-acc.png);
}
.level{
	width: 56px;
	height: 18px;
	display: inline-block;
	text-indent: 2em;
	background-image: url(../../../assets/account/com-acc.png);
}
</style>