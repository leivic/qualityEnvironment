<template>
	<div>
		<top></top>
            	<snav stystys="color:#99FFFF"></snav>
		<div id="chartWjxd" style="{width: '90%', height: '650px'}"></div>
		<div id="monthpickkerbox">
			<el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
		</div>
		<pagenav href1="#/wjxd1" href2="#/wjxd2"></pagenav>
	</div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard" 
import pagenav from"./PageNav.vue"
import getChart from '@/util'

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
	let myChart = getChart.echarts.init(document.getElementById('chartWjxd')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
	Echart1 = myChart
	var that=this
	Echart1.setOption({
				title: {
					text:"",
					textStyle:{
					fontSize:22,
					fontWeight: "normal",
					fontFamily: "Courier New"
					},
					left: "30%",
				},  
				tooltip: {
					trigger: 'axis',
					axisPointer: {            // 坐标轴指示器，坐标轴触发有效
					type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				legend: {
					data: ['文件数', '累计修订', '累计完成率'],
					right: "8%"
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
					axisLabel: {
						interval:0,//横轴信息全部显示
						rotate:-60,//-30度角倾斜显示  
					} 
					}
				],
				yAxis: [
					{
					type: 'value',
					name: '文件数',
					axisLabel: {
						formatter: '{value} '
					}
					},
					{
					type: 'value',
					min:0,
					max: 100,
					axisLabel: {
						formatter: '{value} ％'
					}
					}
				],
				series: [
					{
					name: '文件数',
					type: 'bar',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
					},
					{
					name: '累计修订',
					type: 'bar',
					stack: '意识得分',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
					},
					{
                        		name: '累计完成率',
					type: 'line',
					yAxisIndex: 1
					}
				]
				});
	this.month1=getChart.getmon()
	
},
watch:{
	month1(newVal,oldVal){
		console.log(newVal+","+oldVal)
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/getSencondWenJianDataByDate',
		params:{
			date:this.month1
		},
		}).then((res)=>{
			console.log(res.data)
			let ydata=[]
			let wenjianjihuadata=[]
			let wanchendata=[]
			let gailvdata=[]
			for(let i=0;i<res.data.length;i++){
				ydata.push(res.data[i].quYu)
				wenjianjihuadata.push(res.data[i].jiHuaShu)
				wanchendata.push(res.data[i].wanChenShu)
				gailvdata.push((res.data[i].wanChenShu/res.data[i].jiHuaShu)*100) 
			}
			
			Echart1.setOption({
				title: {
					text:that.month1+"文件修订情况",
				},
				xAxis: [
					{
					data: ydata
					}
				],  
				series: [
					{
					data: wenjianjihuadata,
					},
					{
					data: wanchendata,
					},
					{
					data: gailvdata,
					}
				]
				});

		})	
		
	}
},
beforeDestroy(){
          let Echart1 =null
        }
}
</script>
<style>
#chartWjxd{
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