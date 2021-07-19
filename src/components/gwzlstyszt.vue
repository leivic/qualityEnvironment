<template>
	<div>
		<top></top>
            	<snav stystys="color:#99FFFF"></snav>
		<div id="chartGwzlstyszt" style="{width: '90%', height: '650px'}"></div>
		<div id="monthpickkerbox">
			<el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
		</div>
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
    top
  },
data(){
	return {
		month1:"",
		zongfen:"80",
		jigefen:"64"
		
	}
},
mounted(){
	let myChart = getChart.echarts.init(document.getElementById('chartGwzlstyszt')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
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
					data: ['底线意识', '改进意识', '责任意识', '主人翁意识'],
					right: "5%"
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
						rotate:-70,//-30度角倾斜显示  
					} 
					}
				],
				yAxis: [
					{
					type: 'value',
					max: this.zongfen
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
					barCategoryGap: "1%",
					barWidth:20
					},
					{
						type: 'line'
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
			let jigefendata=[]
			for(let i=0;i<res.data.length;i++){
				ydata.push(res.data[i].gongWeiHao)
				dixiandata.push(res.data[i].diXianYiShi)
				gaijindata.push(res.data[i].gaiJinYiShi)
				zerendata.push(res.data[i].zeRenYiShi)
				zhurenwengdata.push(res.data[i].zhuRenWengYiShi)
				jigefendata.push(this.jigefen) 
			}
			Echart1.setOption({
				title: {
					text:that.month1+"工位质量生态意识状态",
				},
				xAxis: [
					{
					data: ydata
					}
				],  
				series: [
					{
					data: dixiandata,
					},
					{
					data: gaijindata,
					},
					{
					data: zerendata,
					},
					{
					data: zhurenwengdata,
					},
					{
						data: jigefendata,
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