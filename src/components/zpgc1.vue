<template>
    <div>
            <top></top>
            <snav zpgcClass="active"></snav>
            <div id="chartZpgc1" style="{width: '75%', height: '400px'}"></div>
           <pagenav></pagenav>
    </div>
</template>
<script>
import snav from "./Navagationbar"
import top from "./TopCard"
import pagenav from "./PageNavZpgc"     
let echarts = require('echarts/lib/echarts')
import { GridComponent } from 'echarts/components';
import PageNav from './PageNavZpgc.vue'
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
        return{

        }
    },
     components: {
        snav,
        top,
        pagenav
    },
    mounted(){
        let myChart = echarts.init(document.getElementById('chartZpgc1'))
        Echart1=myChart
              Echart1.setOption({
                title: {
                  text:" 各区域自查过程符合率",
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
                    data: ["整车冲压","整车车身","整车涂装","整车总装","发动机机加","发动机装配"],
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
                    data: ["90","100","75","90","80","75"],
                    type: 'bar',
                    barCategoryGap: "3%",
                }]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
              })

    },
    beforeDestroy(){
        Echart1.clear()
    }
}
</script>
<style >
#chartZpgc1{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
  }
</style>