<template>
	<div>
		<b class="user-account-common-title">我的礼券</b>
		<div class="coupon-content">
			<Tabs class="only-coupon-taps" value="red-packet">
		        <Tab-pane label="红包" name="red-packet">
		        	<CouponRed/>
		        </Tab-pane>
		        <Tab-pane label="体验金" name="experience">
		        	<CouponExperience/>
		        </Tab-pane>
		        <Tab-pane label="加息券" name="raise-rates">
		        	<CouponRaise/>
		        </Tab-pane>
		        <Tab-pane label="分享金" name="share">
		        	<CouponShare/>
		        </Tab-pane>
		    </Tabs>
		    <router-link to="/coupon/rule" class="rule">使用规则</router-link>
		</div>
	</div>
</template>

<script>
import CouponRed from "@/components/pure/account/CouponRed"
import CouponExperience from "@/components/pure/account/CouponExperience"
import CouponRaise from "@/components/pure/account/CouponRaise"
import CouponShare from "@/components/pure/account/CouponShare"

export default {
	data () {
		return {
		}
	},
	components: {
		CouponRed,
		CouponExperience,
		CouponRaise,
		CouponShare
	}
}
</script>

<style lang="less">
@import '../../../config/base.less';
.only-coupon-taps .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: @theme;
}
.only-coupon-taps .ivu-tabs-nav .ivu-tabs-tab{
		padding: 8px 40px;
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.only-coupon-taps{
	margin-top: 30px;
}
.coupon-content{
	position: relative;
}
.rule{
	position: absolute;
	right: 10px;
	top: 10px;
}

</style>