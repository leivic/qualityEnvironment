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
		
		
	}
},
mounted(){
	let myChart = echarts.init(document.getElementById('chartGwzlstyszt')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
	Echart1 = myChart
	var that=this
	/*
	
	获取当前月份 使用全局变量里面的 thedate对象 
	
	
	*/
	let month2
	if (this.display.theDate.getMonth()<9) {
		month2=this.display.theDate.getFullYear()+"-"+"0"+(this.display.theDate.getMonth()+1)	
	}
	else{
		month2=this.display.theDate.getFullYear()+"-"+(this.display.theDate.getMonth()+1)
	}
	console.log(month2)


	this.$axios({
              method:"post",
              url:'http://localhost:8090/selectBianHuaDianByDate',
              params:{
                  date:month2
              },
              }).then((res)=>{
		  console.log(res.data)
		  

		  Echart1.setOption({
			
			});

	      })
},
watch:{
	month1(newVal,oldVal){
		console.log(newVal+","+oldVal)
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/selectBianHuaDianByDate',
		params:{
			date:this.month1
		},
		}).then((res)=>{
			console.log(res.data)
			
			Echart1.setOption({
				
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
</style>