<template>
    <div>
        <top></top>
            <snav wjxdClass="active"></snav>
            <div id="chartWjxd1" style="{width: '75%', height: '400px'}"></div>
           <pagenav href1="#/wjxd1" href2="#/wjxd2"></pagenav>
    </div>
</template>
<script>
import snav from "./Navagationbar"
import top from "./TopCard"
import pagenav from "./PageNav"
let echarts = require('echarts/lib/echarts')
import { GridComponent } from 'echarts/components';
import PageNav from './PageNav.vue'
echarts.use([GridComponent]);
// 引入柱状图组件 我是使用npm install echarts 安装最新版的echarts 版本不一样
//引入可能也会有一些差别 
import { ToolboxComponent } from 'echarts/components';
echarts.use([ToolboxComponent]);
import { LineChart } from 'echarts/charts';
echarts.use([LineChart]);
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
let Echart1     
export default {
    components: {
        snav,
        top,
        pagenav
    },
    mounted(){
        let myChart = echarts.init(document.getElementById('chartWjxd1'))
        Echart1=myChart
        Echart1.setOption({
            tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        },
        right: "10%"
    },
    legend: {
        data: ['文件数', '累计修订', '累计完成率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['冲压', '车身', '涂装', '总装', '维修','技术质量' ,'采购', '发动机', 'HR', 'IT', '制造工程科', '运行及计划科'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                        interval:0,//横轴信息全部显示
                        rotate:-30,//-30度角倾斜显示  
                    }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '个数',
            min: 0,
            axisLabel: {
                formatter: '{value}个'
            }
        },
        {
            type: 'value',
            name: '完成率',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '文件数',
            type: 'bar',
            data: [19, 15, 8, 14, 31, 32, 31, 6, 8, 2, 26, 8]
        },
        {
            name: '累计修订',
            type: 'bar',
            data: [19, 15, 8, 14, 31, 32, 31, 6, 8, 2, 16, 8]
        },
        {
            name: '累计完成率',
            type: 'line',
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 60,100]
        }
    ]
        })
    }
    
}
</script>
<style>
#chartWjxd1{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
  }
</style>