<template>
	<div class="clearfix">
		<Form ref="form" :model="form" :rules="rules" inline class="filter-form">
	        <Form-item prop="state" label="是否到账：" class="only-inline-form-item filter-item">
	            <Select v-model="form.state" style="width:180px" placeholder="是否到账">
			        <Option v-for="item in stateList" :value="item.value" :key="item">{{ item.label }}</Option>
			    </Select>
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
export default {
	props: ['datas'],
	data () {
		return {
			form: {
                state: '2',
                time: '',
            },
            stateList: [
            	{
                    value: '0',
                    label: '未到账'
                },
                {
                    value: '1',
                    label: '已到账'
                },
                {
                    value: '2',
                    label: '全部'
                },
            ],
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
	margin-top: 30px;
}
.filter-item{
	margin-right:40px;
}
.filter-form-search-btn{
	padding: 6px 30px;
}
.filter-form{
	margin-top: 24px;
	border-bottom: 1px dashed @border-two;
}
</style>