<template>
	<div class="my-message-list">
		<b class="user-account-common-title">我的消息</b>
		<div class="op-head">
			<Checkbox v-model="single"><span class="select-all">全选</span></Checkbox>
			<button class="all-read">标记为已读</button>
		</div>
		<div class="list-title">
			<span>来源</span>
			<span>内容</span>
			<span>时间</span>
		</div>
		<div class="list-item" v-for="item,index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
			<Checkbox class="fl"></Checkbox>
			<em class="envelope read fl"></em>
			<span class="origin fl">系统消息</span>
			<router-link to="/" class="preview fl">系统消息系统消统系统消统系统消统系统消统系统消统消统消息</router-link>
			<span class="time fl">2017-04-26 17:47:26</span>
			<Poptip class="fr delete" confirm title="您确认删除这条内容吗？" @on-ok="deleteMsg(index)" :width="190">
		        <Icon type="trash-a" title="删除" class="trash" :size="20"></Icon>
		    </Poptip>
		</div>
    	<div class="my-page">
    		<Page :total="400" size="small" class="page-nav"></Page>
    	</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			single: false
		}
	},
	methods: {
        deleteMsg (e) {
            this.$Message.info('删除'+e);
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
	position: absolute;
	bottom: 10px;
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
.preview{
	width: 260px;
	display: inline-block;
	margin-left: 92px;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: keep-all;
	text-overflow:ellipsis;
}
.origin{
	margin-left: 16px;
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