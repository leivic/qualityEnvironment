<template>
    <div> 
            <top></top>
            <snav stysthj="color:#696969"></snav>
            <div id="chartZpgw1" style="{width: '75%', height: '400px'}"></div>
            <div id="monthpickkerbox">
              <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
            </div>
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
      this.$axios({
              method:"post",
              url:'http://localhost:8090/selectGongWeiFuHeListByDate',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"自查" //
              }
              }).then((res)=>{
                  console.log(res.data)
                  var xdata=[]
                  var ydata=[]
                  for(let i=0;i<res.data.length;i++){
                    
                      xdata.push(res.data[i].pinShenQuYu+res.data[i].stationName)
                      ydata.push(res.data[i].stationPercentage)
                    

                  }
                  console.log(xdata)
                  console.log(ydata)//获得echarts中x轴和y轴的data数据 
              })
  },
  watch:{
     month1(newVal,oldVal){//更改月份的时候 由于month1双向绑定 所以元素里的month1改变 data里的也会改 
          console.log(newVal, oldVal);
          this.$axios({
              method:"post",
              url:'http://localhost:8090/selectGongWeiFuHeListByDate',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"自查" //
              }
              }).then((res)=>{
                  console.log(res.data)
              }) 
      }
  }
}

</script>
<style>
  #chartZpgw1{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
    border: 1px solid black;
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