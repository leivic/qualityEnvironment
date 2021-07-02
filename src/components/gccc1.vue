<template>
    <div> 
            <top></top>
            <snav stysthj="color:#99FFFF"></snav>
            <div id="chartGccc1" style="{width: '75%', height: '400px'}"></div>
            <div id="monthpickkerbox">
              <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
            </div>
            <pagenav href1="#/gccc1" href2="#/gccc2"></pagenav>
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

  data(){
    return {
      month1:"2021-06"
    }
    
  },
    components: {
    snav,
    top,
    pagenav
  },
  mounted(){
     let myChart = echarts.init(document.getElementById('chartGccc1'))
    Echart1 = myChart
    var that=this
      this.$axios({
              method:"post",
              url:'http://localhost:8090/GetSecondGuoChenDataByQuYu',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"抽查" //
              }
              }).then((res)=>{
                  console.log(res.data)
                  var xdata=[]
                  var ydata=[]
                  for(let i=0;i<res.data.length;i++){
                    
                      xdata.push(res.data[i].fenLeiYiJu)
                      ydata.push(res.data[i].guoChenpercentage*100)
                    

                  }
                  console.log(xdata)
                  console.log(ydata)//获得echarts中x轴和y轴的data数据
                  
                  Echart1.setOption({
                title: {
                  text:"质量生态环境"+that.month1+"月抽查区域过程符合率",
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
                    barWidth:20
                }]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
              })
              })

              
  },
  watch:{
     month1(newVal,oldVal){//更改月份的时候 由于month1双向绑定 所以元素里的month1改变 data里的也会改 
          console.log(newVal, oldVal);
          var that=this;
          this.$axios({
              method:"post",
              url:'http://localhost:8090/GetSecondGuoChenDataByQuYu',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"抽查" //
              }
              }).then((res)=>{
                  console.log(res.data)
                  var xdata=[]
                  var ydata=[]
                  for(let i=0;i<res.data.length;i++){
                    
                      xdata.push(res.data[i].fenLeiYiJu)
                      ydata.push(res.data[i].guoChenpercentage*100)
                  }
                  console.log(xdata)
                  console.log(ydata)//获得echarts中x轴和y轴的data数据
                  Echart1.setOption({
                    title: {
                      text:"质量生态环境"+that.month1+"月抽查区域过程符合率",
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
  #chartGccc1{
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