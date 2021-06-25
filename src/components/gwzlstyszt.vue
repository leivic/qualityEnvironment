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
		month1:"2021-06",
		zongfen:"80",
		jigefen:"64"
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
		  let ydata=[]
		  let dixiandata=[]
		  let gaijindata=[]
		  let zerendata=[]
		  let zhurenwengdata=[]
		  for(let i=0;i<res.data.length;i++){
			  ydata.push(res.data[i].gongWeiHao)
			  dixiandata.push(res.data[i].diXianYiShi)
			  gaijindata.push(res.data[i].gaiJinYiShi)
			  zerendata.push(res.data[i].zeRenYiShi)
			  zhurenwengdata.push(res.data[i].zhuRenWengYiShi) 
		  }
		  Echart1.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data: ['底线意识', '改进意识', '责任意识', '主人翁意识']
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
				data: ydata,
				axisLabel: {
					interval:0,//横轴信息全部显示
					rotate:-90,//-30度角倾斜显示  
				} 
				}
			],
			yAxis: [
				{
				type: 'value'
				}
			],
			series: [
				{
				name: '底线意识',
				type: 'bar',
				stack: '意识得分',
				emphasis: {
					focus: 'series'
				},
				data: dixiandata,
				barCategoryGap: "1%",
                    		barWidth:20
				},
				{
				name: '改进意识',
				type: 'bar',
				stack: '意识得分',
				emphasis: {
					focus: 'series'
				},
				data: gaijindata,
				barCategoryGap: "1%",
                    		barWidth:20
				},
				{
				name: '责任意识',
				type: 'bar',
				stack: '意识得分',
				emphasis: {
					focus: 'series'
				},
				data: zerendata,
				barCategoryGap: "1%",
                    		barWidth:20
				},
				{
				name: '主人翁意识',
				type: 'bar',
				stack: '意识得分',
				emphasis: {
					focus: 'series'
				},
				data: zhurenwengdata,
				barCategoryGap: "1%",
                    		barWidth:20
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