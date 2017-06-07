<template>
	<div>
		<b class="agent-common-title">业绩统计</b>
		<div class="statistics-one">
			<span class="statistics-one-item one">提成余额（元）：<span class="theme-color">50</span></span>
			<span class="statistics-one-item two">总提成（元）：<span class="theme-color">50</span></span>
			<span class="statistics-one-item three">已到账（元）：<span class="theme-color">50</span></span>
			<span class="statistics-one-item four">未到账（元）：<span class="theme-color">50</span></span>
		</div>
		<div class="clearfix">
			<div class="statistics-two fl">
				<span class="statistics-two-item">提成余额（元）：<span class="theme-color">50</span></span>
				<span class="statistics-two-item">总提成（元）：<span class="theme-color">50</span></span>
			</div>
			<Form ref="form" :model="form" :rules="rules" inline class="filter-form fr">
		        <Form-item prop="account" class="only-inline-form-item filter-item">
		            <Input type="text" v-model="form.account" placeholder="手机号码" style="width: 180px;"/>
		        </Form-item>
		        <Form-item prop="time"  class='only-inline-form-item filter-item'>
		             <Date-picker type="daterange" placement="bottom-end" v-model="form.time" placeholder="选择日期" style="width: 180px;"></Date-picker>
		        </Form-item>
		        <Form-item class="fr">
		            <Button type="primary" @click="handleSubmit('form')" class="filter-form-search-btn">搜索</Button>
		        </Form-item>
		    </Form>
		</div>
		<Table :columns="head" :data="datas" class="profit-list-table no-border-ivu-table"></Table>
	    <div class="common-center-page-wrap" >
    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
    	</div>
	</div>
</template>

<script>
import {validatePhoneFilter} from '@/tool/regx'
export default {
	data () {
		return {
			form: {
				account: '',
				time: '',
			},
			rules: {
				 account: [
                	{ validator: validatePhoneFilter, trigger: 'blur' }
                ],
			},
			head: [
                {
                    title: '姓名',
                    key: 'name',
                    align: 'center',
                },
                {
                    title: '手机号码',
                    key: 'phone',
                    align: 'center',
                    width: 120
                },
                {
                    title: '购买时间',
                    key: 'buyTime',
                    align: 'center',
                    width: 120
                },
                {
                    title: '理财产品',
                    key: 'product',
                    align: 'center',
                },
                {
                    title: '理财金额',
                    key: 'money',
                    align: 'center',
                },
                {
                    title: '提成',
                    key: 'profit',
                    align: 'center',
                },
                {
                    title: '发放时间',
                    key: 'grantTime',
                    align: 'center',
                    width: 120
                },
                {
                    title: '状态',
                    key: 'state',
                    align: 'center',
                },
            ],
            datas: [
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            	{
            		name: '音无结弦',
            		phone: '15773270836',
            		buyTime: '2017-01-22',
            		product: '暖春回馈',
            		money: 100000,
            		profit: 500,
            		grantTime: '2017-02-03',
            		state: '未发放'
            	},
            ]
		}
	}
}

</script>

<style scoped="scoped" lang="less">
@import url('../../../config/base.less');
.profit-list-table{
	margin-top: 30px;
}
.filter-form-search-btn{
	padding: 6px 30px;
}
.filter-form{
	margin-top: 30px;
}
.statistics-two-item{
	display: block;
	margin-top: 22px;
	font-size: @fz;
	color: @gray-three;
}
.statistics-two{
	width: 324px;
}
.theme-color{
	color: @theme;
}
.statistics-one-item.four{
	width: 172px;
}
.statistics-one-item.three{
	width: 210px;
}
.statistics-one-item.two{
	width: 210px;
}
.statistics-one-item.one{
	width: 210px;
}
.statistics-one-item{
	display: inline-block;
	font-size: @fz;
	color: @gray-three;
}
.statistics-one{
	margin-top: 30px;
	padding-bottom: 14px;
	border-bottom: 1px dashed @border-two;
}
</style>