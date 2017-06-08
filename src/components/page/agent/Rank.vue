<template>
	<div>
		<b class="agent-common-title">排行榜</b>
		<div class="rank-content">
			<Tabs class="only-agent-rank-taps" value="nationwide">
		        <Tab-pane label="全国" name="nationwide">
		        	<Table :columns="head" :data="nationwide" class="profit-list-table no-border-ivu-table"></Table>
				    <div class="common-center-page-wrap" >
			    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
			    	</div>
		        </Tab-pane>
		        <Tab-pane label="地区" name="region">
		        	<Table :columns="head" :data="region" class="profit-list-table no-border-ivu-table"></Table>
				    <div class="common-center-page-wrap" >
			    		<Page :total="400" size="small" class="common-center-page-nav"></Page>
			    	</div>
		        </Tab-pane>
		    </Tabs>
		    <Date-picker class="agent-rank-date-picker" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 180px"></Date-picker>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			head: [
				{
                    title: '排名',
                    key: 'rank',
                    align: 'center',
                    className: 'theme-color',
                },
                {
                    title: '姓名',
                    key: 'phone',
                    align: 'center',
                },
                {
                    title: '业绩金额',
                    key: 'achievement',
                    align: 'center',
                },
                {
                    title: '注册量',
                    key: 'rigistNum',
                    align: 'center',
                },
                {
                    title: '提成金额',
                    key: 'profit',
                    align: 'center',
                },
                {
                    title: '注册时间',
                    key: 'rigistTime',
                    align: 'center',
                },
			],
			nationwide: [
				{
					rank: 1,
					phone: '15612124545',
					achievement: 500000,
					rigistNum: 13,
					profit: 6000,
					rigistTime: '2017-01-12'
				},
				{
					rank: 2,
					phone: '15612124545',
					achievement: 500000,
					rigistNum: 13,
					profit: 6000,
					rigistTime: '2017-01-12'
				},
				{
					rank: 3,
					phone: '15612124545',
					achievement: 500000,
					rigistNum: 13,
					profit: 6000,
					rigistTime: '2017-01-12'
				},
				{
					rank: 4,
					phone: '15612124545',
					achievement: 500000,
					rigistNum: 13,
					profit: 6000,
					rigistTime: '2017-01-12'
				},
				{
					rank: 5,
					phone: '15612124545',
					achievement: 500000,
					rigistNum: 13,
					profit: 6000,
					rigistTime: '2017-01-12'
				},
			],
			region: [
				{
					rank: 1,
					phone: '15746264521',
					achievement: 26214,
					rigistNum: 10,
					profit: 3254,
					rigistTime: '2017-01-12'
				},
				{
					rank: 2,
					phone: '15746264521',
					achievement: 26214,
					rigistNum: 5,
					profit: 3254,
					rigistTime: '2017-01-12'
				},
				{
					rank: 3,
					phone: '15746264521',
					achievement: 26214,
					rigistNum: 15,
					profit: 3254,
					rigistTime: '2017-01-12'
				},
				{
					rank: 4,
					phone: '15746264521',
					achievement: 26214,
					rigistNum: 12,
					profit: 3254,
					rigistTime: '2017-01-12'
				},
				{
					rank: 5,
					phone: '15746264521',
					achievement: 26214,
					rigistNum: 10,
					profit: 3254,
					rigistTime: '2017-01-12'
				},
			],
			
		}
	}
}
</script>


<style lang="less">
@import '../../../config/base.less';

.only-agent-rank-taps .ivu-tabs-nav .ivu-tabs-tab:hover{
	color: @theme;
}
.only-agent-rank-taps .ivu-tabs-nav .ivu-tabs-tab{
		padding: 8px 40px;
}
td.theme-color{
	color: @theme;
}
</style>
<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.rank-content{
	margin-top: 30px;
	position: relative;
}
.agent-rank-date-picker{
	position: absolute;
	right: 0px;
	top: 0px;
}
</style>