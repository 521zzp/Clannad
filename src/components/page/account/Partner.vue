<template>
	<div>
		<b class="user-account-common-title">我的团队</b>
		<div class="condition">
			<Form ref="form" :model="form" :rules="ruleInline" inline :label-width="50">
		        <FormItem prop="account" label="账号：">
		            <Input type="text" v-model="form.account" placeholder="请输入账号" style="width: 150px;"></Input>
		        </FormItem>
		        <FormItem prop="generation" label="等级：">
		            <Select v-model="form.generation" placeholder="请选择等级" style="width: 150px;">
				        <Option value="1">一代会员</Option>
				        <Option value="2">二代会员</Option>
				        <Option value="3">三代会员</Option>
				    </Select>
		        </FormItem>
		        <FormItem prop="time" label="日期：">
		        	 <DatePicker v-model="form.time" format="yyyy-MM-dd" type="daterange" placeholder="选择注册日期" style="width: 200px"></DatePicker>
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
	</div>
</template>

<script>
import { validatePhoneFilter } from '@/tool/regx'

export default {
    data () {
        return {
            form: {
                account: '',
                generation: '1',
                time: ['', '']
            },
            cache: {
            	account: '',
                generation: '1',
                time: ['', '']
            },
            size: 15,
            ruleInline: {
                account: [
                    { validator: validatePhoneFilter, trigger: 'blur' }
                ],
            },
            columns: [
                {
                    title: '账号',
                    key: 'account'
                },
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '投资额度',
                    key: 'money'
                },
                {
                    title: '获取提成',
                    key: 'bonus'
                },
                {
                    title: '注册时间',
                    key: 'time'
                }
            ],
        }
    },
    computed: {
    	total () {
			return this.$store.state.account.team.total
		},
		totalFlag () {
			return this.$store.state.account.team.totalFlag
		},
		list () {
			return this.$store.state.account.team.list
		}
    },
    created () {
    	const params = Object.assign( {}, this.cache, { size: this.size, current: 1} )
    	this.$store.dispatch('accountTeamTotal',params)
    },
   	watch: {
   		totalFlag () {
   			if (this.total > 0) {
				const params = Object.assign( {}, this.cache, { size: this.size, current: 1} )
				this.$store.dispatch('accountTeamList', params)
			}
   		}
   	},
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                	this.cache = this.form
                	const params = {...this.form, size: this.size, current: 1}
                	this.$store.dispatch('accountTeamTotal', params)
                }
            })
        },
        change ( current ) {
        	const params = Object.assign( {}, this.cache, { size: this.size, current: current} )
        	this.$store.dispatch('accountTeamList', params)
        }
    }
}
	
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.my-page{
	margin-top: 40px;
	text-align: center;
	width: 100%;
}
.condition{
	margin: 30px 0 10px 0;
}


	
</style>