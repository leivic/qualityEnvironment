<template>
	<div>
		<top></top>
            	<snav stystys="color:#99FFFF"></snav>
		<div id="chartGwzlstyszt" style="{width: '90%', height: '650px'}"></div>
		<div id="monthpickkerbox">
			<el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
		</div>
		<pagenav href1="#/bhd" href2="#/bhd2"></pagenav>
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
    top,
    pagenav
  },
data(){
	return {
		month1:"",
		
		
	}
},
mounted(){
	let myChart = echarts.init(document.getElementById('chartGwzlstyszt')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
	Echart1 = myChart
	var that=this
	
	
	
	let month2 //获取当前月份 使用全局变量里面的 thedate对象 
	if (this.display.theDate.getMonth()<9) {
		month2=this.display.theDate.getFullYear()+"-"+"0"+(this.display.theDate.getMonth()+1)	
	}
	else{
		month2=this.display.theDate.getFullYear()+"-"+(this.display.theDate.getMonth()+1)
	}
	console.log(month2)//获取当前月份 


	this.$axios({
              method:"post",
              url:'http://localhost:8090/getBianHuaDianSecondData',
              params:{
                  date:month2
              },
              }).then((res)=>{
		  console.log(res.data)
		  let xdata=[];
		  let ydata=[];
		  for (const r of res.data) {
			  xdata.push(r.fenLeiYiJu)
			  ydata.push(r.percentage*100)
		  }
		  console.log(xdata)
		  console.log(ydata)


		  /*
		  let arryCheJian=[]//数组去重  循环res.data对象数组的每一项 并将每一项作为参数传入箭头函数 .foreach方法本就要传参
		  res.data.forEach(element => {
			  return arryCheJian.includes(element.shenHeQuYu) ? '' : arryCheJian.push(element.shenHeQuYu)
		  });
		  console.log(arryCheJian)//数组去重
		  
		  
		  for (var i of res.data) { //双重循环 当去重后的车间数组 和 未去重前的所有车间相等时
			  for (let a in arryCheJian) {
				  if (i.shenHeQuYu == arryCheJian[a]) {
					 console.log(i.shenHeQuYu+arryCheJian[a])
					 console.log(arryCheJian[a])
					 arryCheJian[a]=new Array()
					 arryCheJian[a].push(i.okOrNoOk)//得到一个二维数组 
				  }
			  }
		  }//双重循环  

		  for (const x of arryCheJian) {//双重循环 输出二维数组每一项
		  	  console.log(x)
		  }//双重循环 
		  */


		  Echart1.setOption({
				title: {
				text:"质量生态意识"+month2+"变化点措施落实率",
				textStyle:{
					fontSize:22,
					fontWeight: "normal",
					fontFamily: "Courier New"
					},
				left: "center",
				},
				tooltip: {
				trigger: "axis",
				axisPointer: {
				type: "shadow",
				},
				},//鼠标悬浮的提示框组件 
				toolbox: {
				feature: {
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar']},
					restore: {show: true},
					saveAsImage: {show: true}
				},
				right: "10%"
				},
				xAxis: {
				type: 'category',
				data: xdata,
				axisLabel: {
					interval:0,//横轴信息全部显示
				}
				},
				yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value}%',
				}
				},
				series: [{
				data: ydata,
				type: 'bar',
				barCategoryGap: "1%",
				barWidth:20
				}]
			});

	      })
},
watch:{
	month1(newVal,oldVal){
		console.log(newVal+","+oldVal) //监控data里面的数据 
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/getBianHuaDianSecondData',
		params:{
			date:this.month1
		},
		}).then((res)=>{
			console.log(res.data)
			let xdata=[];
			let ydata=[];
			for (const r of res.data) {
				xdata.push(r.fenLeiYiJu)
				ydata.push(r.percentage*100)
			}
			console.log(xdata)
			console.log(ydata)
			Echart1.setOption({
				title: {
				text:"质量生态意识"+that.month1+"变化点措施落实率",
				},
				xAxis: {
				data: xdata,
				},
				series: [{
				data: ydata,
				}]	
			})	
		})
		
	}
},
beforeDestroy(){
          let Echart1 =null
        	}
}
</script>
<style>
#chartGwzlstyszt{
    float: right;
    width: 90%;
    height: 650px;
  }
  #monthpickkerbox{
    position: absolute;
    left: 10%;
  }
  #monthpicker{
    border:none;
    background: none;
  }
</style>