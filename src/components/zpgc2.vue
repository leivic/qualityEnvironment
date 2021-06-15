<template>
    <div>
            <top></top>
            <snav stysthj="color:#696969"></snav>
            <div id="chartZpgc2" style="{width: '75%', height: '400px'}"></div>
           <pagenav href1="#/zpgc1" href2="#/zpgc2"></pagenav><!--子组件的属性几乎都可以绑定-->
    </div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard"
import pagenav from "./PageNav"     
let echarts = require('echarts/lib/echarts')
import { GridComponent } from 'echarts/components';
import PageNav from './PageNav.vue'
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
    created(){
    },
    mounted(){
        let myChart = echarts.init(document.getElementById('chartZpgc2'))
        Echart1=myChart
        this.echartsInit(Echart1)

    },
    methods:{
        echartsInit(e){
            e.setOption({
                title: {
                  text:" 自查过程符合率",
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
                    data: ["C5","M3","S2","S2","S8","S6"],
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
                    data: ["82","80","92","75","91","100"],
                    type: 'bar',
                    barCategoryGap: "3%",
                }]//echarts的那些配置 就是一个完整的对象 这个对象的很多属性仍然是对象
              })
        }
    },
    beforeDestroy(){
        Echart1.clear()
    }
}
</script>
<style >
#chartZpgc2{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
  }
</style>