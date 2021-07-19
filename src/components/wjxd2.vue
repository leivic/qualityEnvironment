<template>
    <div>
        <top></top>
            <snav stysthj="color:#99FFFF"></snav>
            <div id="chartWjxd2" style="{width: '85%', height: '600px'}"></div>
            <div id="monthpickkerbox">
			    <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
		    </div>
           <pagenav href1="#/wjxd1" href2="#/wjxd2"></pagenav>
    </div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard"
import pagenav from "./PageNav"
import getChart from '@/util'

let Echart1
export default {
    data(){
        return {
            month1:"",
            
            
        }
    },
     components: {
        snav,
        top,
        pagenav
    },
    mounted(){
        let myChart = getChart.echarts.init(document.getElementById('chartWjxd2')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
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
					data: ['不修订', '划改', '换页','换版','新增','撤销'],
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
					
				],
				series: [
					{
					name: '不修订',
                    type: 'bar',
                    stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
					},
					{
					name: '划改',
					type: 'bar',
					stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
                    },
                    {
					name: '换页',
					type: 'bar',
					stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
                    },
                    {
					name: '换版',
					type: 'bar',
					stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
                    },
                    {
					name: '新增',
					type: 'bar',
					stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
                    },
                    {
					name: '撤销',
					type: 'bar',
					stack: 'one',
					emphasis: {
						focus: 'series'
					},
					barCategoryGap: "1%",
					barWidth:20
					},
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
                url:'http://localhost:8090/getWenJianXiuDinThirdData',
                params:{
                    date:this.month1
                },
                }).then((res)=>{
                    console.log(res.data)
                    let ydata=[]
                    let xdata=[]
                    let buxiudindata=[]
                    let huagaidata=[]
                    let huanyedata=[]
                    let huanbandata=[]
                    let xinzengdata=[]
                    let chexiaodata=[]
                                        


                    for(let i=0;i<res.data.length;i++){
                        ydata.push(res.data[i].quYu)
                        switch(res.data[i].xiuGaiLeiXin) {
                            case "不修订":
                               buxiudindata.push(res.data[i].shuLiang)
                               huagaidata.push("0")
                               huanyedata.push("0")
                               huanbandata.push("0")
                               xinzengdata.push("0")
                               chexiaodata.push("0") 
                               break;
                            case "划改":
                               huagaidata.push(res.data[i].shuLiang)
                               buxiudindata.push("0")
                               huanyedata.push("0")
                               huanbandata.push("0")
                               xinzengdata.push("0")
                               chexiaodata.push("0")  
                               break; 
                            case "换页":
                               huanyedata.push(res.data[i].shuLiang)
                               buxiudindata.push("0")
                               huagaidata.push("0")
                               huanbandata.push("0")
                               xinzengdata.push("0")
                               chexiaodata.push("0")   
                               break;
                            case "换版":
                               huanbandata.push(res.data[i].shuLiang)
                               buxiudindata.push("0")
                               huagaidata.push("0")
                               huanyedata.push("0")
                               xinzengdata.push("0")
                               chexiaodata.push("0")    
                               break;
                            case "新增":
                               xinzengdata.push(res.data[i].shuLiang)
                               buxiudindata.push("0")
                               huagaidata.push("0")
                               huanyedata.push("0")
                               huanbandata.push("0")
                               chexiaodata.push("0")     
                               break;
                            case "撤销":
                               chexiaodata.push(res.data[i].shuLiang)
                               buxiudindata.push("0")
                               huagaidata.push("0")
                               huanyedata.push("0")
                               huanbandata.push("0")
                               xinzengdata.push("0") 
                               break;  
                        }
                        xdata.push(res.data[i].shuLiang)
                        
                    }
                    
                    Echart1.setOption({
                        title: {
                            text:that.month1+"文件修订类型情况",
                        },
                        xAxis: [
                            {
                            data: ydata
                            }
                        ],  
                        series: [
                            {
                            data: buxiudindata,
                            },
                            {
                            data: huagaidata,
                            },
                            {
                            data: huanyedata,
                            },
                            {
                            data: huanbandata, 
                            },
                            {
                            data: xinzengdata, 
                            },
                            {
                            data: chexiaodata
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
#chartWjxd2{
    float: right;
    width: 85%;
    height: 600px;
  }
</style>