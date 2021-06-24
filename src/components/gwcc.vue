<template>
    <div> 
            <top></top>
            <snav stysthj="color:#696969"></snav>
            <div id="chartZpgw1" style="{width: '75%', height: '400px'}"></div>
            <div id="monthpickkerbox">
              <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
            </div><!--elment ui 库的标签 v-model双向绑定month1 绑定了一个vue组建实例的data值-->
    </div>
</template>

<script>
import snav from "./Nav"
import top from "./TopCard" 
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

  data(){
    return {
      month1:"2021-06"
    }
    
  },
    components: {
    snav,
    top,
  },
  mounted(){
     let myChart = echarts.init(document.getElementById('chartZpgw1')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
    Echart1 = myChart
    var that=this
      this.$axios({
              method:"post",
              url:'http://localhost:8090/getLastGongWeiData',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"抽查" //
              }
              }).then((res)=>{ //res的作用域只有then方法/函数里面 函数作用域 then是一个函数 
                  console.log(res.data)
                  var xdata=[]
                  var ydata=[]
                  for(let i=0;i<res.data.length;i++){ //res对象 .取对象值
                    
                      xdata.push(res.data[i].stationName) //数组的.push方法 res对象的data属性是数组  这种是什么类型 什么类型的方法就随便用
                      ydata.push(res.data[i].stationPercentage*100)
                    

                  }
                  console.log(xdata)
                  console.log(ydata)//获得echarts中x轴和y轴的data数据
                  
                  Echart1.setOption({ //对象Echarts1的 setOption方法 赋值 
                title: {
                  text:"质量生态环境"+that.month1+"月工位抽查符合率",
                  textStyle:{
                    fontSize:22
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
                        rotate:-60,//-30度角倾斜显示  
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}%',//参数类型的写法 
                    }
                },
                series: [{
                    data: ydata,
                    type: 'bar',
                    barCategoryGap: "1%",
                    barWidth:20
                }]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
              })
              })

              
  },
  watch:{
    month1(newVal,oldVal){//更改月份的时候 由于month1双向绑定 所以元素/界面里的month1改变 data里的也会改 
	  console.log(newVal, oldVal);
	  var that=this;
          this.$axios({
              method:"post",
              url:'http://localhost:8090/getLastGongWeiData',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"抽查" //
              }
              }).then((res)=>{
                  console.log(res.data)
	    	          var xdata=[]
                  var ydata=[]
                  for(let i=0;i<res.data.length;i++){
                    
                      xdata.push(res.data[i].stationName)
                      ydata.push(res.data[i].stationPercentage*100)
                  }
                  console.log(xdata)
                  console.log(ydata)//获得echarts中x轴和y轴的data数据
                  Echart1.setOption({
                    title: {
                    text:"质量生态环境"+that.month1+"月工位抽查符合率"
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
  #chartZpgw1{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
  }
  #monthpickkerbox{
    position: absolute;
    left: 25%;
  }
  #monthpicker{
    border:none;
    background: none;
  }
</style>