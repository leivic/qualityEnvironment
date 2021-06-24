<template>
	<div>
		<top></top>
            	<snav stystys="color:#696969"></snav>
		<div id="chartGwzlstyszt" style="{width: '75%', height: '400px'}"></div>
		<div id="monthpickkerbox">
			<el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
		</div>
	</div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard" 
import pagenav from"./PageNav.vue"
let echarts = require('echarts/lib/echarts')
import { GridComponent } from 'echarts/components';
echarts.use([GridComponent]);
// 引入柱状图组件 我是使用npm install echarts 安装最新版的echarts 版本不一样
//引入可能也会有一些差别 
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
import { ToolboxComponent } from 'echarts/components';
echarts.use([ToolboxComponent]);
let Echart1
export default {
components: {
    snav,
    top
  },
data(){
	return {
		month1:"2021-06"
	}
},
mounted(){
	let myChart = echarts.init(document.getElementById('chartGwzlstyszt')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
	Echart1 = myChart
	var that=this
	this.$axios({
              method:"post",
              url:'http://localhost:8090/selectShengTaiYiShiDataByDate',
              params:{
                  date:this.month1
              },
              }).then((res)=>{
		  console.log(res.data)
		  
		  for(i=0;i<res.data.length;i++){

		  }
		  Echart1.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
				type: 'category',
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				}
			],
			yAxis: [
				{
				type: 'value'
				}
			],
			series: [
				{
				name: '邮件营销',
				type: 'bar',
				stack: '广告',
				emphasis: {
					focus: 'series'
				},
				data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
				name: '联盟广告',
				type: 'bar',
				stack: '广告',
				emphasis: {
					focus: 'series'
				},
				data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
				name: '视频广告',
				type: 'bar',
				stack: '广告',
				emphasis: {
					focus: 'series'
				},
				data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
				name: '直接访问',
				type: 'bar',
				stack: '广告',
				emphasis: {
					focus: 'series'
				},
				data: [150, 232, 201, 154, 190, 330, 410]
				},
			]
			});

	      })
}
}
</script>
<style>
#chartGwzlstyszt{
    float: right;
    width: 85%;
    height: 600px;
    margin: 10px 10px 0px 20px;
    
  }
  #monthpickkerbox{
    position: absolute;
    left: 15%;
  }
  #monthpicker{
    border:none;
    background: none;
  }
</style>