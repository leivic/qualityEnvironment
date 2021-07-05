<template>
    <div> 
            <top></top>
            <snav stysthj="color:#99FFFF"></snav>
            <div id="chartZpgc2" style="{width: '75%', height: '400px'}"></div>
            <div id="monthpickkerbox">
              <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
            </div>
            <pagenav href1="#/zpgc1" href2="#/zpgc2"></pagenav>
    </div>
</template>

<script>
import snav from "./Nav"
import top from "./TopCard"
import getChart from '@/util' 
import pagenav from"./PageNav.vue"

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
    pagenav
  },
  mounted(){
    let myChart = getChart.echarts.init(document.getElementById('chartZpgc2'))
    Echart1 = myChart
    getChart.getChart2(Echart1)

    this.month1=getChart.getmon()
    console.log(this.month1)
  },
  watch:{
     month1(newVal,oldVal){//更改月份的时候 由于month1双向绑定 所以元素里的month1改变 data里的也会改 
          console.log(newVal, oldVal);
          var that=this;
          this.$axios({
              method:"post",
              url:'http://localhost:8090/GetSecondGuoChenDataByGuoChen',
              params:{
                  date:this.month1,
                  pingShengXingZhi:"自查" //
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
                  getChart.getChart2Data(Echart1,"质量生态环境"+this.month1+"自评过程符合率",xdata,ydata)//因为getChart是对象 所以使用.语法  当前文件自然只能使用当前文件出现的变量 
              }) 
      }
  },
  beforeDestroy(){
          let Echart1 =null
        }
}

</script>
<style>
  #chartZpgc2{
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