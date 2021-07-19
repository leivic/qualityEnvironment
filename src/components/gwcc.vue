<template>
    <div> 
            <top></top>
            <snav stysthj="color:#99FFFF"></snav>
            <div id="chartZpgw1" style="{width: '90%', height: '650px'}"></div>
            <div id="monthpickkerbox">
              <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
            </div><!--elment ui 库的标签 v-model双向绑定month1 绑定了一个vue组建实例的data值-->
    </div>
</template>

<script>
import snav from "./Nav"
import top from "./TopCard" 
import getChart from '@/util'

let Echart1
export default {

  data(){
    return {
      month1:""
    }
    
  },
    components: {
    snav,
    top,
  },
  mounted(){
    let myChart = getChart.echarts.init(document.getElementById('chartZpgw1')) //获得一个dom元素 传入echarts对象的init方法 这是个静态方法 不出意外是写在原型上的 
    Echart1 = myChart
    var that = this
    getChart.getChart2(Echart1)


    this.month1=getChart.getmon()
              
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
                  getChart.getChart2Data(Echart1,"质量生态环境"+this.month1+"抽查自评工位符合率",xdata,ydata)
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
    width: 90%;
    height: 650px;
  }
  #monthpickkerbox{
    position: absolute;
    left: 10%;
  }
  #monthpicker{
    border:none;
    background: none;
  }
</style>