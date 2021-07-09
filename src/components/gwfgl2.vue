<template>
	<div>
		<top></top>
            	<snav stystys="color:#99FFFF"></snav>
		<div id="chartGwfgl" style="{width: '75%', height: '400px'}"></div>
		<div id="monthpickkerbox">
			<el-date-picker  id="monthpicker" type="year" value-format="yyyy" v-model="year1">{{year1}}</el-date-picker>
		</div>
		<pagenav href1="#/gwfgl" href2="#/gwfgl2"></pagenav>
		<div class="form-group col-md-4" id="state">
                    <select id="inputState" class="form-control" v-model="quYu">
                        <option selected>冲压车间</option>
                        <option>车身车间</option>
                        <option>涂装车间</option>
                        <option>总装车间</option>
                        <option>机加车间</option>
                        <option>总装车间</option>
                    </select>
		</div>
	</div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard" 
import pagenav from"./PageNav.vue"
import getChart from '@/util' //注意 在本组件里面 我并没有导入echrts的组件 但是在getChart里面导入了 

let Echart1
export default {
components: {
    snav,
    top,
    pagenav
  },
data(){
	return {
		year1:"",
		quYu:"总装车间"
		
	}
},
mounted(){
	let myChart = getChart.echarts.init(document.getElementById('chartGwfgl')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
	Echart1 = myChart
	var that=this
	Echart1.setOption({	title: {
					text:"",
					textStyle:{
					fontSize:22
					},
					left: "36%",
				},  
			 	tooltip: {
					trigger: 'axis',
					axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
					}
				},
				legend: {
					data: ['数量', '百分比'],
					right:"20%"
				},
				xAxis: [
					{
					type: 'category',
					axisPointer: {
						type: 'shadow'
					}
					}
				],
				yAxis: [
					{
					type: 'value',
					name: '数量',
					axisLabel: {
						formatter: '{value} '
					}
					},
					{
					type: 'value',
					name: '百分比',
					max: 100,
					axisLabel: {
						formatter: '{value} ％'
					}
					}
				],
				series: [
					{
					name: '数量',
					type: 'bar',
					barCategoryGap: "1%",
		    			barWidth:20
					},
					{
					name: '百分比',
					type: 'line',
					yAxisIndex: 1,
					}
				]
				
				});
	this.year1=getChart.getmon().substring(0,4)// substr 截取字符串  之前getmon()得到的是2021-07 现在得到的就是2021
	console.log(this.year1)
},
watch:{
	year1(newVal,oldVal){
		console.log(newVal+","+oldVal)
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/getGongWeiFuGaiLvSecondDataByYearAndQuYu',
		params:{
			year:this.year1,
			quYu:this.quYu
		},
		}).then((res)=>{
			let xdata=[]
			let ydata1=[]
			let ydata2=[]
			console.log(res.data)
			for (const x of res.data) {
				xdata.push(x.yuefen+"月"),
				ydata1.push(x.shuLiang),
				ydata2.push(x.gaiLv)	
			}
			console.log(xdata)
			console.log(ydata1)
			Echart1.setOption({
				title: {
					text:this.quYu+this.year1+"年总工位覆盖率",
					},
				xAxis: [
					{
					data:xdata
					}
				],
				yAxis: [
					{
					max:res.data[0].shuLiang
					}
				],
				series: [
					{
					data:ydata1
					},
					{
					data:ydata2
					}
				]
				});

		})	
		
	},
	quYu(newVal,oldVal){
		console.log(newVal+","+oldVal)
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/getGongWeiFuGaiLvSecondDataByYearAndQuYu',
		params:{
			year:this.year1,
			quYu:this.quYu
		},
		}).then((res)=>{
			let xdata=[]
			let ydata1=[]
			let ydata2=[]
			console.log(res.data)
			for (const x of res.data) {
				xdata.push(x.yuefen+"月"),
				ydata1.push(x.shuLiang),
				ydata2.push(x.gaiLv)	
			}
			console.log(xdata)
			console.log(ydata1)
			Echart1.setOption({
				title: {
					text:this.quYu+this.year1+"年总工位覆盖率",
					},
				xAxis: [
					{
					data:xdata
					}
				],
				yAxis: [
					{
					max:res.data[0].shuLiang
					}
				],
				series: [
					{
					data:ydata1
					},
					{
					data:ydata2
					}
				]
				});

		})	
		
	},

},
beforeDestroy(){
          let Echart1 =null
        }
}
</script>
<style>
#chartGwfgl{
    float: right;
    width: 85%;
    height: 600px;
  }
  #monthpickkerbox{
    position: absolute;
    left: 15%;
  }
  #monthpicker{
    border:none;
    background: none;
  }
  #state{
	  position:absolute;
	  top:100px;
	  left:25%;
	  width: 12%;
  }
</style>