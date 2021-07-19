<template>
	<div>
		<top></top>
		<snav stystys="color:#99FFFF"></snav><!--子组件绑定值在props里面 传到父组件参数成了标签的属性-->
		


        <div id="gly1" style="{width: '90%', height: '700px'}">
                
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col" colspan="8"> <!--没记错的话th是块级元素 ？ 可以包裹 甚至也可以包裹表单 可以看成一个div-->
                            变化点问题清单
                        </th>
                       
			<th scope="col" colspan="2">
				<nav aria-label="Page navigation example" id="pageNavbhd2">
				<ul class="pagination">
				<li class="page-item"><a class="page-link" href="http://localhost:8080/#/bhd">1</a></li>
				<li class="page-item"><a class="page-link" href="http://localhost:8080/#/bhd2">2</a></li>
				</ul>
				</nav>
			</th>
                    </tr>
                    <tr>
                    <th scope="col" >#</th>
                    <th scope="col" >区域</th>
                    <th scope="col" >审核工位/变化点</th>
                    <th scope="col" >问题描述</th>
                    <th scope="col" >原因分析</th>
		            <th scope="col" >改进措施</th>
                    <th scope="col" >时间</th>
		            <th scope="col" >计划完成时间</th>
                    <th scope="col" >状态</th>
		            <th scope="col" >负责人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata2" v-if="isShow"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在tr上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th><!--注意标签里属性绑定的值 会直接绑定该值到vue model层里面的data-->
                    <th scope="col" >{{item.quYu}}</th>
                    <th scope="col" >{{item.bianHuaDian}}</th>
                    <th scope="col" >{{item.wenTiMiaoShu}}</th></th>
                    <th scope="col" >{{item.yuanYinFenXi}}</th>
		            <th scope="col" >{{item.gaiJinCuoShi}}</th>
                    <th scope="col" >{{item.date}}</th>
		            <th scope="col" >{{item.jiHuaWanChenRiQi}}</th>
                    <th scope="col" >{{item.zhuangTai}}</th>
		            <th scope="col" >{{item.fuZeRen}}</th>
                    </tr>
                </tbody>
                </table>
                </div>
                <div id="gly1bottom">
                    <pagehelper class="aaaa1" :page="page2" ></pagehelper><!--将传过来的属性再次绑定-->
                </div>
		</div>
	</div>
</template>
<script>
import snav from "./Nav"
import top from "./TopCard"
import pagehelper from "./util/pageHelper.vue" //import的变量只能是小写的

export default {
data(){
return{
   
    tabledata2:[],
    isShow:true,    
    
    page2:{
        pageNum:1,
        handleCurrentChange: val=> {
            this.pageNum=val,
            this.pageChage2(val) //data里面可以绑定对象 对象的方法也可以绑定  箭头函数传参 然后调用methods里面的方法传进去
        }
    },
}
},
components: {
    snav,
    top,
    pagehelper,
    
  },
  mounted(){
       this.$axios({
	      method:"post",
	      params:{
                  pageNum:"1"//params data是前后端交互 不同的数据格式 
              },
              url:'http://localhost:8090/selectAllWenTiQinDan',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata2=res.data //生命周期里面的ajax里面的this仍然指向 当前组件vue实例
              })
       
  },
  methods:{
      pageChage2(val){
          this.pageNum=val
          console.log(val)
          this.$axios({
	      method:"post",
	      params:{
                  pageNum:this.pageNum
              },
              url:'http://localhost:8090/selectAllWenTiQinDan',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata2=res.data 
              })
      },

  }
}
</script>
<style scoped>
 #gly1{
    float: right;
    width: 90%;
    position: relative;
    height: 700px;
  
  }
  
  .glyzpgwrightbox{
      float: right;
      margin-left: 3px;
  }
 #gly1mid{
     text-align: center;
      white-space: nowrap;
     overflow-x: auto;
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
  .aaaa1 {
      float: right;
  }
  #pageNavbhd2{
        position: absolute;
        right: 1px;
	top: 0px;
    }
</style>