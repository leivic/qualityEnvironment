<template>
    <div> 
            <top></top>
            <snav glyClass="active"></snav>
            <adduser id="adduser"></adduser>
            <div id="gly1" style="{width: '37.5%', height: '400px'}">
                <div id="gly1top">
                    <div id="gly1topleft">
                        <h3>用户信息管理</h3>
                    </div>
                    <div id="gly1topright ">
                   <button type="button" class="btn btn-primary">删除</button>
                   <button type="button" class="btn btn-primary" @click="moadl()">新增</button>
                    </div><!--@click 绑定事件函数的一种写法 方法直接写在methods里面 moadl()括号里是
                    可以直接传参的 number和字符串都可以直接放 甚至可以放变量 比如moadl(text) 
                    这个text直接绑定在下面的data return里面就好 应用场景：1.基于事件访问函数 
                    2.几个事件做的是一样的方法 但是传参不同 直接在标签里传参-->
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
                    <tr v-for="item in tabledata"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在行上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th>
                    <td>{{item.xingming}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.role_name}}</td>
                    </tr>
                </tbody>
                </table>
                </div>
                    
                    <nav aria-label="Page navigation example" id="page111">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link"  aria-label="Previous" @click="getlist(pageUserIfoNum-1)">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link"@click="getlist(1)">1</a></li>
                        <li class="page-item"><a class="page-link" @click="getlist(2)">2</a></li>
                        <li class="page-item"><a class="page-link" @click="getlist(3)">3</a></li>
                        <li class="page-item">
                        <a class="page-link"  aria-label="Next" @click="getlist(pageUserIfoNum+1)">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                    
            </div>
    </div>
</template>
<script>
import snav from "./Navagationbar"
import top from "./TopCard"
import adduser from "./AddUser.vue" 
export default {
    data(){
        return{
            tabledata:[

            ],
            pageUserIfoNum:"1" // 弱类型语言 会自己在字符串和数字间转化
        }
    },
    components: {
    snav,
    top,
    adduser
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
                  this.tabledata=res.data //生命周期里面的ajax里面的this仍然指向 当前页面对象
              })
  },
  methods:{
      getlist(page){   //函数的写法之一 弱类型 所以参数直接写个page完事 类型什么的都不用管 这里是形参
      //到上面标签里直接传值就是实参了
          if(page == 0){
              return;
          }
          var that=this;
          this.$axios({
              method:"post",
              url:'http://localhost:8090/findALLUser',
              params:{          //
                  pageNum:page //变量作用域 写在这儿的page代表形参
              }
              }).then((res)=>{
                  console.log(res.data)
                  that.tabledata=res.data
              }) ,
            this.pageUserIfoNum=page;
      },
      moadl(){
          var a =document.getElementsByClassName("modal")[0]/*根据类名取dom 取出来是一个集合*/
          a.style.display="block" //操作dom元素 用js动态改变dom元素的style样式  这里是基于点击事件绑定一个函数改变样式 应用场景：弹窗
      }
  }
}
</script>
<style>
    #gly1{
    float: right;
    width: 37%;
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
      position: absolute;
      right:0px;
      bottom: 0px;
  }
  li:hover {
    cursor: pointer;
  }
  .modal{
      display: none;   /*vue里面的css是共用的  要牢记他是一个单页面应用*/
  }
</style>