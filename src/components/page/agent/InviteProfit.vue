<template>
	<div>
		<b class="agent-common-title">推广收益明细</b>
		<div class="statistics">
			<span class="statistics-item">收益余额(元)：<b class="statistics-value">50</b></span>
			<span class="statistics-item">收益总额(元)：<b class="statistics-value">100</b></span>
			<span class="statistics-item">已提取(元)：<b class="statistics-value">50</b></span>
		</div>
		<Form ref="form" :model="form" :rules="rules" inline class="filter-form">
	        <Form-item prop="phone" label="来源用户：" class="only-inline-form-item filter-item">
	            <Input type="text" v-model="form.phone" placeholder="手机号码" style="width: 180px;"/>
	        </Form-item>
	        <Form-item prop="time" label="选择日期：" class='only-inline-form-item filter-item'>
	             <Date-picker type="daterange" placement="bottom-end" v-model="form.time" placeholder="选择日期" style="width: 180px;"></Date-picker>
	        </Form-item>
	        <Form-item class="fr">
	            <Button type="primary" @click="handleSubmit('form')" class="filter-form-search-btn">搜索</Button>
	        </Form-item>
	    </Form>
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
                phone: '',
                time: '',
            },
            rules: {
                phone: [
                	{ validator: validatePhoneFilter, trigger: 'blur' }
                ],
            },
            head: [
                {
                    title: '收益类型',
                    key: 'type',
                    align: 'center',
                },
                {
                    title: '收益时间',
                    key: 'time',
                    align: 'center',
                },
                {
                    title: '收益金额',
                    key: 'money',
                    align: 'center',
                },
                {
                    title: '来源用户',
                    key: 'account',
                    align: 'center',
                }
            ],
            datas: [
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
                {
                    type: '首投奖励',
                    time: '2017-05-18 16：18：24',
                    money: '3.00',
                    account: '18611112222',
                },
               
            ]
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.profit-list-table{
	margin-top: 20px;
}
.filter-item{
	margin-right:40px;
}
.filter-form-search-btn{
	padding: 6px 30px;
}
.filter-form{
	margin-top: 24px;
}
.statistics{
	margin-top: 30px;
	padding-bottom: 10px;
	border-bottom: 1px dashed @border-two;
}
.statistics-item{
	display: inline-block;
	width: 260px;
	font-size: @fz;
	color: @gray-three;
}
.statistics-value{
	color: @theme;
	font-size: @bfz;
	vertical-align: -1px;
}
	
</style>