let echarts = require('echarts/lib/echarts')
import { GridComponent } from 'echarts/components';
echarts.use([GridComponent]);
// 引入柱状图组件 我是使用npm install echarts 安装最新版的echarts 版本不一样
//引入可能也会有一些差别
import { LineChart } from 'echarts/charts';
echarts.use([LineChart]); 
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
import { ToolboxComponent } from 'echarts/components';
echarts.use([ToolboxComponent]);


let getChart1 = function(chart,title,xdata,ydata){
	chart.setOption({
		title: {
		  text:title,
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
			rotate:-50,//-30度角倾斜显示  
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
		}]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
	      })
}


let getChart2=function(chart){    //没有数据 但有别的 
	chart.setOption({
		title: {
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
		    axisLabel: {
			interval:0,//横轴信息全部显示
			rotate:-60,//-30度角倾斜显示  
		    }
		},
		yAxis: {
		    max:100,
		    type: 'value',
		    axisLabel: {
			formatter: '{value}%',
		    }
		},
		series: [{
		    type: 'bar',
		    barCategoryGap: "1%",
		    barWidth:20
		}]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
	      })
}

//每次改变日期时改变只数据
let getChart2Data=function(chart,title,xdata,ydata){
	chart.setOption({
		title: {
	          text:title,
		},
		xAxis: {
		    data:xdata
		},
		series: [{
		    data:ydata
		}]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
	      })
} 


//获取当前日期
var theDate=new Date()
let getmon=function(){//参数
	let month1
        if (theDate.getMonth()<9) {
          month1=theDate.getFullYear()+"-"+"0"+(theDate.getMonth()+1)	
        }
        else{
          month1=theDate.getFullYear()+"-"+(theDate.getMonth()+1)
	}
	return month1//返回值 函数得到的结果 
      }



export default{getChart1,echarts,getmon,getChart2,getChart2Data}