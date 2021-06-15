<template>
	<div>
		<top></top>
		<snav styadmin="color:#696969"></snav>
		<div id="gly1" style="{width: '75%', height: '400px'}">
                <div id="gly1top">
                    <div id="gly1topleft">
                        <h3>工位信息管理</h3>
                    </div>
                    <div id="gly1topright ">
			  <form>
				<div class="glyzpgwrightbox">
				
				<input type="file" id="exampleFormControlFile1">
				</div>
				</form>
                    </div>
                </div>
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">工作模块</th>
                    <th scope="col">自评/抽查</th>
                    <th scope="col">评审内容</th>
                    <th scope="col">工位名称</th>
		    <th scope="col">适用条款</th>
                    <th scope="col">符合条款</th>
                    <th scope="col">符合率</th>
		    <th scope="col">评审区域</th>
                    <th scope="col">评审时间</th>
		   <th scope="col">#</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在行上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th>
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
                        <a href="#" @click="a(item.id)">
                            删除
                        </a><!--链接由此获得数据库id  item.id本就是从数据库取出来的-->
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>
		</div>
	</div>
</template>
<script>
import snav from "./../Nav"
import top from "./../TopCard"
export default {
data(){
return{
	tabledata:[]
}
},
components: {
    snav,
    top,
  },
  mounted(){
      this.$axios({
	      method:"post",
	      params:{
                  date:"2021-06"
              },
              url:'http://localhost:8090/selectGongWeiFuHeListByDate',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data //生命周期里面的ajax里面的this仍然指向 当前页面对象
              })
  },
}
</script>
<style>
 #gly1{
    float: right;
    width: 75%;
    height: 500px;
    margin: 10px 10px 0px 20px;
    position: relative;
  }
  #gly1top{
      height: 10%;
      padding: 3px;
  }
  #gly1topleft{
      float: left;
      height: 100%;
      width: 25%;
     
      text-align: center;
      line-height: 100%;
  }
   #gly1topright{
      float: right;
      height: 100%;
      width: 43%;
  }
  .glyzpgwrightbox{
      float: right;
      margin-left: 3px;
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
</style>