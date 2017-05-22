<template>
	<div>
		<span class="title">资金明细</span>
		<div class="clearfix taps-group">
			<Tabs value="in" type="card" class="my-current-record">
		        <Tab-pane label="转入" name="in">
		        	<div class="head">
		        		<b class="time">时间</b>
		        		<b class="money">金额（元）</b>
		        	</div>
		        	<div class="record-item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]">
		        		<span class="time">2017-05-02 18:39</span>
		        		<span class="money">4512.5</span>
		        	</div>
		        	<div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
		        </Tab-pane>
		        <Tab-pane label="转出" name="out">
		        	<div class="head">
		        		<b class="time">时间</b>
		        		<b class="money">金额（元）</b>
		        	</div>
		        	<div class="record-item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]">
		        		<span class="time">2015-05-02 18:39</span>
		        		<span class="money">5547527</span>
		        	</div>
		        	<div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
		        </Tab-pane>
		        <Tab-pane label="收益" name="profit">
		        	<div class="head">
		        		<b class="time">时间</b>
		        		<b class="money">金额（元）</b>
		        	</div>
		        	<div class="record-item" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]">
		        		<span class="time">2014-05-02 18:39</span>
		        		<span class="money">7558</span>
		        	</div>
		        	<div class="my-page">
		        		<Page :total="400" size="small" class="page-nav"></Page>
		        	</div>
		        </Tab-pane>
		    </Tabs>
		     <Date-picker class="my-date-picker" type="daterange" :options="options" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			options: {
                shortcuts: [
                    {
                        text: '最近一周',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近一个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            return [start, end];
                        }
                    },
                    {
                        text: '最近三个月',
                        value () {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            return [start, end];
                        }
                    }
                ]
            }
		}
	}
}
</script>
<style lang="less">
@import '../../../config/base.less';
.my-current-record .ivu-tabs-tab{
	padding: 5px 30px 4px !important;
}
.my-current-record .ivu-tabs-tab:hover{
	color: @theme;
}
</style>

<style scoped="scoped" lang="less">
@import '../../../config/base.less';

.title{
	font-size: 18px;
	display: block;
	color: @gray-three;
	margin-top: 10px;
	margin-bottom: 10px;
}
.taps-group{
	position: relative;
}
.my-date-picker{
	width: 200px;
	position: absolute;
	right: 0;
	top: -5px;
}
.money{
	width: 40%;
	display: inline-block;
	text-align: center;
	margin-left: 20%;
}
.time{
	display: inline-block;
	width: 30%;
	text-align: center;
}
.record-item .money{
	color: @theme;
}
.record-item{
	height: 52px;
	line-height: 52px;
	font-size: @fz;
	border-bottom: 1px solid @border-three;
}
.head{
	height: 42px;
	line-height:32px;
	font-size: @fz;
	color: @gray-one;
	border-bottom: 1px solid @border-two;
}
.my-page{
	margin-top: 20px;
	text-align: center;
}
.page-nav{
	display: inline-block;
}

</style>