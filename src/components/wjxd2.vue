<template>
    <div>
        <top></top>
            <snav wjxdClass="active"></snav>
            <div id="chartWjxd2" style="{width: '75%', height: '400px'}"></div>
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
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')     
export default {
     components: {
        snav,
        top,
        pagenav
    },
}
</script>
<style>

</style>