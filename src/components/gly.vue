<template>
    <div> 
            <top></top>
            <snav glyClass="active"></snav>
            <div id="gly1" style="{width: '37.5%', height: '400px'}">
                <div id="gly1top">
                    <div id="gly1topleft">
                        <h3>用户信息管理</h3>
                    </div>
                    <div id="gly1topright ">
                   <button type="button" class="btn btn-primary">删除</button>
                   <button type="button" class="btn btn-primary">新增</button>
                    </div>
                </div>
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">姓名</th>
                    <th scope="col">用户名</th>
                    <th scope="col">权限</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata">
                    <th scope="row" >{{item.id}}</th>
                    <td>{{item.xingming}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.role_name}}</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div id="gly1bottom">
                    <pagenav id="page111"></pagenav>
                </div>
            </div>
    </div>
</template>
<script>
import snav from "./Navagationbar"
import top from "./TopCard"
import pagenav from "./PageNavUsual"     
export default {
    data(){
        return{
            tabledata:[

            ],
            pageUserIfoNum:"1"
        }
    },
    components: {
    snav,
    top,
    pagenav
  },
  mounted(){
      this.$axios({
              method:"post",
              url:'http://localhost:8090/findALLUser',
              params:{
                  pageNum:this.pageUserIfoNum
              }
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data
              })
  }
}
</script>
<style>
    #gly1{
    float: right;
    width: 37%;
    height: 500px;
    margin: 10px 10px 0px 20px;
  }
  #gly1top{
      height: 10%;
      padding: 3px;
  }
  #gly1topleft{
      float: left;
      height: 100%;
      width: 57%;
     
      text-align: center;
      line-height: 100%;
  }
   #gly1topright{
      float: right;
      height: 100%;
      width: 43%;
  }
  .btn{
      float: right;
      margin-left: 3px;
  }
 
  .list-group{
      width: 70%;
      margin: 0 auto;
      margin-top: 10px;
  }
  #page111 {
      float: right;
  }
</style>