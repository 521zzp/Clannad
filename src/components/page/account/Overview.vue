<template>
	<div class="overview">
		<div class="top">
			<span class="total">总资产（元）:{{capital.total}}</span>
			<div class="recently">
				<span class="s-one">昨日收益（元）：<span class="deepen">{{capital.yesterday}}</span></span>
				<span class="s-one">累计收益（元）：<span class="deepen">{{capital.accumulate}}</span></span>
			</div>
			<div class="statistics clearfix">
				<span class="s-one fl">账户余额：{{capital.balance}}</span>
				<span class="s-one fl">冻结金额：{{capital.freeze}}</span>
				<span v-if="trade" class="s-one fl">
					<span class="l-span">活期宝：{{capital.current}}</span>
					<router-link to="/account" class="level-two">详情</router-link>
				</span>
				<span class="s-one-com fl">
					<span class="l-span">积分<span class="point">{{capital.points}}</span></span>
					<router-link v-if="trade" to="/account" class="level-two">可购商品</router-link>
				</span>
			</div>
			<div class="link-group" v-if="trade">
				<router-link to="/account/recharge" class="link-btn">充值</router-link>
				<router-link to="/account/enchashment" class="link-btn">提现</router-link>
			</div>
		</div>
		<div class="condition">
			<span class="record-title">资金记录：</span>
			<Form ref="form" :model="form" :rules="ruleInline" inline :label-width="50">
		        <FormItem prop="type" label="类型：">
		            <Select v-model="form.type" placeholder="请选择类型" style="width: 150px;">
		            	<Option value="0">全部</Option>
				        <Option value="1">收益</Option>
				        <Option value="2">支出</Option>
				    </Select>
		        </FormItem>
		        <FormItem prop="time" label="时间：">
		        	 <DatePicker v-model="form.time" format="yyyy-MM-dd" type="daterange" placeholder="请选择时间" style="width: 200px"></DatePicker>
		        </FormItem>
		        <FormItem>
		            <Button type="primary" @click="handleSubmit('form')">搜索</Button>
		        </FormItem>
		    </Form>
		</div>
		<div class="member-list">
			<span v-if="total === 0" class="table-no-data" ><Icon type="android-sad" style="margin-right: .5em;"></Icon>暂无数据</span>
			<div v-else>
				<Table class="no-border-ivu-table" :columns="columns" :data="list"></Table>
		    	<div class="my-page">
		    		<Page :total="total" size="small" class="page-nav" @on-change="change"></Page>
		    	</div>
			</div>
		</div>
		<!--<HotRecom class="ab-hot"/>-->
	</div>
</template>

<script>
	import { validatePhoneFilter } from '@/tool/regx'
	import HotRecom from '@/components/pure/account/HotRecom'
	export default {
		data () {
			return {
				form: {
	                type: '0',
	                time: ['', '']
	            },
	            cache: {
	                type: '1',
	                time: ['', '']
	            },
	            size: 10,
	            ruleInline: {
	                account: [
	                    { validator: validatePhoneFilter, trigger: 'blur' }
	                ],
	            },
	            columns: [
	                {
	                    title: '操作',
	                    key: 'cause'
	                },
	                {
	                    title: '变化',
	                    key: 'change',
	                    render: (h, params) => {
                            return h('span', {
                            	style: {
                            		color: params.row.change > 0 ?  'green' : '#FF5722'
                            	}
                            }, params.row.change);
                        }
	                },
	                {
	                    title: '时间',
	                    key: 'time',
	                }
	            ],
			}
		},
		mounted () {
			let bread = [
					{
						name: '掌柜金服',
						url: '/'
					},
					{
						name: '我的账户',
						url: '/account'
					},
					{
						name: '账户总览',
						url: ''
					},
				];
			this.$store.dispatch('accountBreadChange', bread)
		},
		components: {
			HotRecom,
		},
		computed: {
			trade () {
				return this.$store.state.trade
			},
			capital () {
				return this.$store.state.account.overViewCapital
			},
			total () {
				return this.$store.state.account.ovReacord.total
			},
			totalFlag () {
				return this.$store.state.account.ovReacord.totalFlag
			},
			list () {
				return this.$store.state.account.ovReacord.list
			}
		},
		created () {
	    	const params = Object.assign( {}, this.cache, { size: this.size } )
	    	this.$store.dispatch('accountCapitalRecordTotal', params)
	    	this.$store.dispatch('ovCap')
	    },
		watch: {
	   		totalFlag () {
	   			if (this.total > 0) {
					const params = Object.assign( {}, this.cache, { size: this.size, current: 1} )
					this.$store.dispatch('accountCapitalRecordList', params)
				}
	   		}
	   	},
		methods:{
			handleSubmit(name) {
	            this.$refs[name].validate((valid) => {
	                if (valid) {
	                	this.cache = this.form
	                	const params = {...this.form, size: this.size, current: 1}
	                	this.$store.dispatch('accountCapitalRecordTotal', params)
	                }
	            })
	        },
	        change ( current ) {
	        	const params = Object.assign( {}, this.cache, { size: this.size, current: current} )
	        	this.$store.dispatch('accountCapitalRecordList', params)
	        }
		},
	}
	
</script>

<style lang="less" scoped="scoped">
@import '../../../config/base.less';

.my-page{
	margin-top: 40px;
	text-align: center;
	width: 100%;
}
.record-title{
	display: block;
	font-size: 18px;
	margin-bottom: 10px;
	padding-top: 10px;
	border-top: 1px dashed #dcdcdc;
}
.condition{
	margin: 30px 0 10px 0;
}
.overview{
	min-height: 1028px;
	position: relative;
}
.ab-hot{
	position: absolute;
	bottom: 10px;
}
.link-group{
	margin-top: 10px;
}
.point:before{
	content: '';
	display: inline-block;
	width: 17px;
	height: 17px;
	background-image: url(../../../assets/account/price.png);
	margin-bottom: -.2em;
	margin-left: .3em;
	margin-right: .2em;
}
.link-btn{
	display: inline-block;
	width: 80px;
	height: 30px;
	color: @white;
	background-color: @theme;
	text-align: center;
	line-height: 30px;
	border-radius: @br;
	font-size: @fz;
	margin-right: 36px;
}
.total{
	font-size: @sfz * 2;
	color: @gray-three;
}
.recently .s-one{
	color: @gray-one;
}
.recently{
	border-bottom: 1px dashed #4d4d4d;
	margin-top: 32px;
	padding-bottom: 14px;
	font-size: @fz;
}
.statistics{
	margin-top: 24px;
	font-size: @fz;
}
.l-span{
	display: block;
}
.s-one .deepen{
	color: @gray-three;
}
.s-one-com{
	display: inline-block;
}
.s-one{
	display: inline-block;
	width: 240px;
}
</style>