<template>
    <div>
        <top></top>
        <snav styxyjf="color:#99FFFF"></snav>
        <div id="chartXyjf1" style="{width: '90%', height: '650px'}"></div>
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
export default {

    components: {
        snav,
        top
    },
}
</script>
<style>
 #chartXyjf1{
    float: right;
    width: 90%;
    height: 650px;
  }
</style>