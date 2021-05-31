<template>
    <div>
            <top></top>
            <snav zpgwClass="active"></snav>
            <div id="chartZpgw1" ></div>    
    </div>
</template>

<script>
import snav from "./Navagationbar"
import top from "./TopCard"     
let echarts = require('echarts/lib/echarts')  
// 引入柱状图组件     
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
  
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
    this.$axios({
              method:"post",
              url:'http://localhost:8090/selectModel3ByMonth',
              data:{
                  month:this.month
              }
          }).then((res)=>{
            console.log(res.data);
            
           })
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