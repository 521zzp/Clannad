<template>
	<div class="my-message-list">
		<b class="user-account-common-title">我的消息</b>
		<div class="op-head">
			<Checkbox :value="single" @on-change="checkAll"><span class="select-all">全选</span></Checkbox>
			<button class="all-read" @click="allRead">标记为已读</button>
		</div>
		<div class="list-title">
			<span>来源</span>
			<span>内容</span>
			<span>时间</span>
		</div>
		<span v-if="total === 0" class="table-no-data" ><Icon type="android-sad" style="margin-right: .5em;"></Icon>暂无数据</span>
		<div v-else>
			<div class="list-item" v-for="item,index in list">
				<Checkbox class="fl" :value="item.checked" @on-change="singleCheck(item.id)"></Checkbox>
				<em class="envelope fl" :class="{ 'read': item.read }"></em>
				<span class="origin fl">{{item.origin}}</span>
				<span class="preview fl" :class="{ 'no-read': !item.read }" :title="item.content">{{item.content}}</span>
				<span class="time fl">{{item.time}}</span>
				<Poptip class="fr delete" confirm title="您确认删除这条内容吗？" @on-ok="deleteMsg(item.id)" :width="190">
			        <Icon type="trash-a" title="删除" class="trash" :size="20"></Icon>
			    </Poptip>
			</div>
	    	<div class="my-page">
	    		<Page :total="total" size="small" class="page-nav" @on-change="change"></Page>
	    	</div>
		</div>
	</div>
</template>

<script>
import { message } from '@/tool/talk'
 	
export default {
	data () {
		return {
			size: 10,
		}
	},
	mounted () {
		let bread = [
				{
					name: '余惠宝',
					url: '/'
				},
				{
					name: '我的账户',
					url: '/account'
				},
				{
					name: '我的消息',
					url: ''
				},
			];
		this.$store.dispatch('accountBreadChange', bread)
		this.$store.dispatch('accountMessageTotal', {} )
	},
	computed: {
		total () {
			return this.$store.state.account.message.total
		},
		list () {
			return this.$store.state.account.message.list
		},
		single () {
			return this.$store.state.account.message.allSelect
		}
	},
	watch:{
		total () {
			this.$store.dispatch('accountMessageList', {size: this.size, current: 1})
		}
	},
	methods: {
        deleteMsg (id) {
            this.$Message.info('删除'+id);
            this.$store.dispatch('accountMessageDelete', {ids: [id]})
        },
        allRead () {
        	let ids = []
        	for (let item of this.list) {
        		if (item.checked) {
        			ids.push(item.id)
        		} 
        	}
        	if (ids.length > 0) {
        		this.$store.dispatch('accountMessageRead', {ids: ids} )
        	} else {
        		message('您还未选择消息', 3)
        	}
        },
        change (current) {
        	this.$store.dispatch('accountMessageList', {size: this.size, current: current})
        },
        singleCheck (id) {
        	this.$store.dispatch('accountMessageSelect', {id: id})
        },
        checkAll (value) {
        	console.log(value)
        	this.$store.dispatch('accountMessageSelectAll', value)
        }
    }
}

</script>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';
.select-all{
	margin-left: 1em;
}
.my-message-list{
	height: 930px;
	position: relative;
}
.my-page{
	margin-top: 40px;
	text-align: center;
	width: 100%;
}
.page-nav{
	display: inline-block;
}
.trash{
	color: @theme;
}
.delete{
	margin-right: 10px;
	cursor: pointer;
}
.time{
	margin-left: 144px;
}
.preview.no-read{
	color: @theme;
}
.preview:hover{
	color: @theme;
}
.preview{
	width: 260px;
	color: @gray-one;
	display: inline-block;
	margin-left: 92px;
	height: 60px;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: keep-all;
	text-overflow:ellipsis;
}
.origin{
	margin-left: 16px;
	width: 80px;
	font-size: @fz;
}
.envelope.read{
	background-image: url(../../../assets/account/icon-read-envelope.png);
}
.envelope{
	margin-left: 30px;
	margin-top: 20px;
	width: 22px;
	height: 22px;
	background-image: url(../../../assets/account/icon-envelope.png);
	background-repeat: no-repeat;
	background-position: center center;
}
.list-item{
	height: 60px;
	line-height: 60px;
	padding-left: 4px;
	color: @gray-three;
	border-bottom: 1px solid @border-three;
}
.list-title .span{
	color: @gray-three;
}
.list-title{
	margin-top: 24px;
	height: 44px;
	line-height: 44px;
	background-color: @gray-two;
	padding-left: 64px;
	padding-right: 142px;
	font-size: @bfz;
	display: flex;
	justify-content: space-between;
}
.all-read:hover{
	background-color: lighten(@theme,5%);
	border: 1px solid lighten(@theme,5%);
}
.op-head{
	margin-top: 40px;
}
.all-read{
	margin-left: 50px;
	width: 84px;
	height: 28px;
	color: @white;
	background-color: @theme;
	border: 1px solid @theme;
	border-radius: @br;
	cursor: pointer;
	font-size: @fz;
}
</style>