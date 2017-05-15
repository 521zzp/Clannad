<template>
	<div>
		<AHeader/>
		<div class="container">
			<Breadcrumb class="breadcrumbs" separator=">">
		        <Breadcrumb-item v-for="nav in breadcrumbs" :href="nav.url" key="nav">{{nav.name}}</Breadcrumb-item>
		    </Breadcrumb>
		    <div class="clearfix" >
		    	<ProInfo  class="info fl"/>
		    	<div class="buy fr">
		    		<span class="pro-left">剩余可投：<span>100000</span>元</span>
		    		<div v-if="this.$store.state.token !== ''" class="online">
		    			<span>账户余额：<span class="balance">{{this.$store.state.user.balance}}</span>元</span>
		    			<router-link to="/product" class="fr">充值</router-link>
		    		</div>
		    		<div v-else class="online">
		    			<span>账户余额<router-link to="/login" class="to-login">登陆</router-link>后可见</span>
		    		</div>
		    		<Input v-model="money" class="pro-detail-count">
				        <Button @click="minus" slot="prepend" icon="ios-minus-empty"></Button>
				        <Button @click="add" slot="append" icon="ios-plus-empty"></Button>
				    </Input>
				    <span class="vali-notice">{{valiMsg}}</span>
				    <button class="buy-now">立即购买</button>
		    	</div>
		    </div>
		    <div class="taps-detail">
		    	<ProInfoTaps/>
		    </div>
		</div>
		<AFooter/>
	</div>
</template>

<script>
import AHeader from '@/components/pure/common/AHeader'
import AFooter from '@/components/pure/common/AFooter'
import ProInfo from '@/components/pure/prodetail/ProInfo'
import ProInfoTaps from '@/components/pure/prodetail/ProInfoTaps'

export default {
	data () {
		return {
			money: 1000,
			valiMsg: '购买金额必须为整数',
			breadcrumbs: [
				{
					name: '余惠宝首页',
					url: '/'
				},
				{
					name: '产品详情',
					url: ''
				},
			]
		}
	},
	components: {
		AHeader,
		AFooter,
		ProInfo,
		ProInfoTaps,
	},
	methods: {
		minus () {
			console.log('minus')
		},
		add () {
			console.log('add')
		}
	}
}
</script>
<style lang="less">
@import '../../config/base.less';
.i-pro-detail-progress .ivu-progress-bg{
	background-color: @theme;
}
.pro-detail-count .ivu-input{
	height: 38px !important;
}
.pro-detail-count .ivu-input-group-prepend,.pro-detail-count .ivu-input-group-append{
	background-color: @theme;
}
.pro-detail-count .ivu-btn{
	color: @white !important;
}
</style>

<style lang="less" scoped="scoped">
@import '../../config/base.less';
.container{
	width: @mw;
	margin:0 auto;
}
.buy-now:hover{
	background-color: lighten(@theme,5%);;
}
.buy-now{
	display: block;
	width: 280px;
	height: 44px;
	cursor: pointer;
	background-color: @theme;
	color: @white;
	font-size: @bfz;
	border-radius: @br;
	border: 1px solid @theme;
	margin-top: 30px;;
}
.vali-notice{
	display: block;
	height: @fz;
}
.pro-detail-count{
	margin-top: 20px;
}
.vali-notice{
	color: red;
}
.to-login{
	color: @theme;
	margin: 0 8px;
}
.balance{
	font-size: @fz;
}
.online{
	margin-top: 44px;
}
.pro-left span{
	font-size: 26px;
}
.pro-left{
	font-size: @bfz;
	color: @gray-three;
	display: block;
	margin-top: 24px;
}
.buy{
	width: 350px;
	height: 330px;
	padding: 0 34px;
	background-color: @white;
	border:1px solid @border-two;
}
.breadcrumbs{
	margin: 10px 0;
}
.taps-detail{
	height: 578px;
	background-color: @white;
	margin-top: 40px;
	margin-bottom: 40px;
}

</style>