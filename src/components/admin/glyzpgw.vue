<template>
	<div>
		<top></top>
		<snav styadmin="color:#99FFFF"></snav><!--子组件绑定值在props里面 传到父组件参数成了标签的属性-->
		<div id="gly1" style="{width: '85%', height: '700px'}">
                
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                       <th scope="col" colspan="6">工位信息管理</th>
                        <th scope="col" colspan="5">
                               <el-upload
                                class="upload-demo"
                                action="http://localhost:8090/exportGongWeiFuHe"
                                multiple
                                :limit="3"
                                >
                                <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                        </th> 
                    </tr>
                    <tr>
                    <th scope="col" width="4%">#</th>
                    <th scope="col" width="12%">工作模块</th>
                    <th scope="col" width="9%">自评/抽查</th>
                    <th scope="col" width="10%">评审内容</th>
                    <th scope="col" width="12%">工位名称</th>
		            <th scope="col" width="9%">适用条款</th>
                    <th scope="col" width="9%">符合条款</th>
                    <th scope="col" width="7%">符合率</th>
		            <th scope="col" width="12%">评审区域</th>
                    <th scope="col" width="9%">评审时间</th>
		            <th scope="col" width="7%">#</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata" v-if="isShow"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在tr上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th><!--注意标签里属性绑定的值 会直接绑定该值到vue model层里面的data-->
                    <th scope="col">{{item.workModel}}</th>
                    <th scope="col">{{item.ziPingORChouCha}}</th>
                    <th scope="col">{{item.review}}</th>
                    <th scope="col">{{item.stationName}}</th>
		            <th scope="col">{{item.applicableTerms}}</th>
                    <th scope="col">{{item.meetTheTerms}}</th>
                    <th scope="col">{{item.stationPercentage}}</th>
		            <th scope="col">{{item.pinShenQuYu}}</th>
		            <th scope="col">{{item.pinShenShiJian}}</th>
                    <td>
                        <a href="#" @click="delet(item.id)">
                            删除
                        </a><!--链接由此获得数据库id  item.id本就是从数据库取出来的-->
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div id="gly1bottom">
                    <pagehelper id="aaaa1" :page="page" ></pagehelper><!--将传过来的属性再次绑定-->
                </div>
		</div>
        
	</div>
</template>
<script>
import snav from "./../Nav"
import top from "./../TopCard"
import pagehelper from "./../util/pageHelper.vue" //import的变量只能是小写的 
export default {
data(){
return{
    tabledata:[],
    isShow:true,    
    page:{
        pageNum:1,
        handleCurrentChange: val=> {
            this.pageNum=val,
            this.pageChage(val) //data里面可以绑定对象 对象的方法也可以绑定  箭头函数传参 然后调用methods里面的方法传进去
        }
    }
}
},
components: {
    snav,
    top,
    pagehelper
  },
  mounted(){
      this.$axios({
	      method:"post",
	      params:{
                  pageNum:"1"//params data是前后端交互 不同的数据格式 
              },
              url:'http://localhost:8090/selectAllGongWeiFuHe',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data //生命周期里面的ajax里面的this仍然指向 当前组件vue实例
              })
  },
  methods:{
      delet(id){//删除记录功能 
          this.$axios({
          method:"post",
          params:{ 
            id:id
          },
              url:'http://localhost:8090/deleteGongWeiFuHeById',
              }).then((res)=>{
                  console.log(res.data)
              }),
          this.reloaddata()
          this.reload()
      },
      reloaddata(){//重新加载 表格中的数据 更改vue对象 data中绑定的值 然后 由于vue数据双向绑定 会动态更新 
         this.$axios({
	      method:"post",
	      params:{
                  pageNum:"1"
              },
              url:'http://localhost:8090/selectAllGongWeiFuHe',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data 
              }) 
         
      },
      reload () {
      this.isShow= false
      this.$nextTick(function () {
        this.isShow= true
      })
      },
      pageChage(val){
          this.pageNum=val
          console.log(val)
          this.$axios({
	      method:"post",
	      params:{
                  pageNum:this.pageNum
              },
              url:'http://localhost:8090/selectAllGongWeiFuHe',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data 
              })
      }
  }
}
</script>
<style>
 #gly1{
    float: right;
    width: 90%;
    height: 700px;
    position: relative;
   
  }
#gly1mid{
    white-space: nowrap;/*文本不换行 搭配滚动条食用*/
    overflow-x: auto;/*添加x轴滚动条 */
}
  .list-group{
      width: 70%;
      margin: 0 auto;
      margin-top: 10px;
  }
  #page111 {
      position: absolute;
      right:0px;
      bottom: 0px;
  }
  li:hover {
    cursor: pointer;
  }
  #aaaa1 {
      float: right;
  }
</style>