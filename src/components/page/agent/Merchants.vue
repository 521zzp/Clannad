<template>
	<div>
		<b class="agent-common-title">商户列表</b>
		<Form ref="form" :model="form" :rules="rules" inline class="filter-form">
	       	 <Form-item prop="phone" label="来源用户:" class='filter-item'>
	            <Input type="text" v-model="form.phone" placeholder="手机号码" style="width: 180px;"/>
	        </Form-item>
	        <Form-item prop="time" label="选择日期：" class='filter-item'>
	             <Date-picker type="daterange" v-model="form.time" placeholder="选择日期" style="width: 180px;"></Date-picker>
	        </Form-item>
	        <Form-item prop="way" label="注册端口：" class="filter-item">
	            <Select v-model="form.way" style="width:180px" placeholder="注册端口">
			        <Option v-for="item in wayList" :value="item.value" :key="item">{{ item.label }}</Option>
			    </Select>
	        </Form-item>
	        <Form-item >
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
                way: 0
            },
            rules: {
                phone: [
                	{ validator: validatePhoneFilter, trigger: 'blur' }
                ],
            },
            wayList: [
            	{
                    value: 0,
                    label: 'PC'
                },
                {
                    value: 1,
                    label: 'APP'
                },
                {
                    value: 2,
                    label: '后台添加'
                },
                {
                    value: 3,
                    label: 'H5'
                },
            ],
            head: [
                {
                    title: '姓名',
                    key: 'name',
                    align: 'center',
                    className: 'agnet-merchants-theme-color'
                },
                {
                    title: '手机号',
                    key: 'phone',
                    align: 'center',
                },
                {
                    title: '账户余额',
                    key: 'balance',
                    align: 'center',
                },
                {
                    title: '理财金额',
                    key: 'money',
                    align: 'center',
                },
                {
                    title: '注册时间',
                    key: 'time',
                    align: 'center',
                    width: 200
                },
                {
                    title: '注册端口',
                    key: 'port',
                    align: 'center',
                }
            ],
            datas: [
                {
                    name: '夏目',
                    phone: '18611112222',
                    balance: '556699',
                    money: '189755',
                    time: '2017-05-18 16:18:24',
                    port: 'PC'
                },
                {
                    name: '夏目',
                    phone: '18611112222',
                    balance: '556699',
                    money: '189755',
                    time: '2017-05-18 16:18:24',
                    port: 'PC'
                },
                {
                    name: '夏目',
                    phone: '18611112222',
                    balance: '556699',
                    money: '189755',
                    time: '2017-05-18 16:18:24',
                    port: 'PC'
                },
                {
                    name: '夏目',
                    phone: '18611112222',
                    balance: '556699',
                    money: '189755',
                    time: '2017-05-18 16:18:24',
                    port: 'PC'
                },
                {
                    name: '夏目',
                    phone: '18611112222',
                    balance: '556699',
                    money: '189755',
                    time: '2017-05-18 16:18:24',
                    port: 'PC'
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

<style lang="less">
@import '../../../config/base.less';
td.agnet-merchants-theme-color{
	color: @theme;
}
</style>
<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.filter-form-search-btn{
	padding: 6px 40px;
	margin-top: 32px;
}
.filter-form{
	margin-top: 24px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>