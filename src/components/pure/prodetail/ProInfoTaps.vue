<template>
	<div class="clearfix my-proinfo-tabs">
		<Tabs type="card">
	        <Tab-pane label="借款企业信息">借款企业信息</Tab-pane>
	        <Tab-pane label="安全保障">安全保障</Tab-pane>
	        <Tab-pane label="投资记录">投资记录</Tab-pane>
	        <Tab-pane label="回款计划">回款计划</Tab-pane>
	    </Tabs>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style lang="less">
@import '../../../config/base.less';
.my-proinfo-tabs .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: @theme;
}
.my-proinfo-tabs  > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
}
.my-proinfo-tabs > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
}
.my-proinfo-tabs > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
}
.my-proinfo-tabs .ivu-tabs-tabpane{
	padding-left: 30px;
}
</style>