<template>
    <div> 
            <top></top>
            <snav zpgwClass="active"></snav>
            <div id="chartZpgw1" style="{width: '75%', height: '400px'}"></div>
    </div>
</template>

<script>
import snav from "./Navagationbar"
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
let Echart1
export default {

  data(){
    return {
      month:"4"
    }
    
  },
    components: {
    snav,
    top,
  },
  mounted(){
    let myChart = echarts.init(document.getElementById('chartZpgw1'))
    Echart1 = myChart
    var that = this;
    this.$axios({
              method:"post",
              url:'http://localhost:8090/selectModel3ByMonth',
              data:{
                  month:this.month
              }
          }).then((res)=>{
            console.log(res.data);
            var xdata=[];
            var ydata=[];
            for (let i=0;i<res.data.length;i++){
              xdata.push(res.data[i].station)
              console.log(xdata);
              ydata.push(res.data[i].percentage*100)//传过来的是小数，转百分比
            }
              Echart1.setOption({
                title: {
                  text:"质量生态环境"+that.month+"月工位符合率",
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
                xAxis: {
                    type: 'category',
                    data: xdata,
                    axisLabel: {
                        interval:0,//横轴信息全部显示
                        rotate:-90,//-30度角倾斜显示  
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
                }]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
              })

           })
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
</style>