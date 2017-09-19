<template>
	<div style="position: relative;">
		<AHeader/>
		<div class="container">
			<Breadcrumb class="breadcrumbs" separator=">">
		        <Breadcrumb-item v-for="nav in breadcrumbs" :href="nav.url" key="nav">{{nav.name}}</Breadcrumb-item>
		    </Breadcrumb>
		    <div class="clearfix" >
		    	<ProInfo  class="info fl" :product="product"/>
		    	<div class="buy fr">
		    		<span class="pro-left">剩余可投：<span>{{product.left}}</span>元</span>
		    		<div v-if="online" class="online">
		    			<span>账户余额：<span class="balance">{{this.$store.state.user.balance}}</span>元</span>
		    			<router-link to="/product" class="fr">充值</router-link>
		    		</div>
		    		<div v-else class="online">
		    			<span>账户余额<router-link to="/login" class="to-login">登陆</router-link>后可见</span>
		    		</div>
		    		<Input v-model="money" number :placeholder="placeholder" :disabled="!online" class="pro-detail-count" @on-change="change">
				        <Button @click="minus" slot="prepend" icon="ios-minus-empty"></Button>
				        <Button @click="add" slot="append" icon="ios-plus-empty"></Button>
				    </Input>
				    <span class="vali-notice">{{valiMsg}}</span>
				    <span v-if="online" class="expect">预期收益：{{profit}}元</span>
				    <button v-if="online" class="buy-now" @click="buy($route.params.id)">立即购买</button>
				    <button v-else class="buy-now unable">立即购买</button>
		    	</div>
		    </div>
		    <div class="taps-detail">
		    	<ProInfoTaps :taps="product.productItems" :list="product.records"/>
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
			money: '',
			valiMsg: '',
			valiFlag: false,
			placeholder: 1000 + '元起投',
			breadcrumbs: [
				{
					name: '掌柜金服首页',
					url: '/'
				},
				{
					name: '产品详情',
					url: ''
				},
			]
		}
	},
	created () {
		let id =  parseInt(this.$route.params.id)
		this.$store.dispatch('getProDetailInfo', {id: id})
	  },
	computed: {
		online () {
			return this.$store.state.token !== ''
		},
		product () {
			return this.$store.state.prodetail.details
		},
		profit () {
			if (this.$store.state.user.level == '会员') {
				return (this.money * this.product.memberRate / 100 / 365 * this.product.day).toFixed(2)
			} else{
				return (this.money * this.product.rate / 100 / 365 * this.product.day).toFixed(2)
			}
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
			if (this.online && Number.isInteger(this.money) && this.money > 500) {
				this.money = this.money - 500
				this.change()
			}
		},
		add () {
			if (this.online) {
				if (Number.isInteger(this.money)) {
					this.money = this.money + 500
					this.change()
				}else if (this.money == '') {
					this.money = 500
					this.change()
				}
			}
		},
		change () {
			let intRegx = /^[1-9][0-9]*$/;
			if (this.money !== '' && !intRegx.test(this.money)) {
				this.valiFlag = false
				this.valiMsg = '购买金额必须为正整数'
			} else if (this.money < this.product.min) {
				this.valiFlag = false
				this.valiMsg = this.product.min + '元起投'
			} else if (this.money > this.$store.state.user.balance) {
				this.valiFlag = false
				this.valiMsg = '账户余额不足，请先充值'
			} else if (this.money > this.product.left) {
				this.valiFlag = false
				this.valiMsg = '超出剩余可投金额'
			} else{
				this.valiFlag = true
				this.valiMsg = ''
			}
		},
		buy (id) {
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
.buy-now.unable:hover{
	cursor: not-allowed;
	background-color: @border-two;
}
.buy-now.unable{
	background-color: @border-two;
	color: @gray-one;
	border: 1px solid @border-two;
	margin-top: 40px;
}
.buy-now:hover{
	background-color: lighten(@theme,5%);;
}
.expect{
	display: inline-block;
	margin-top: 4px;
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
	margin-top: 20px;
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