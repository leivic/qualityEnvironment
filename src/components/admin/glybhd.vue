<template>
	<div>
		<top></top>
		<snav styadmin="color:#99FFFF"></snav><!--子组件绑定值在props里面 传到父组件参数成了标签的属性-->
		<div class="gly2" style="{width: '90%', height: '700px'}">
                
                <div class="gly2mid">
                    <table class="table">
                <thead class="thead-light">
                     <tr>
                        <th scope="col" colspan="5"> <!--没记错的话th是块级元素 ？ 可以包裹 甚至也可以包裹表单 可以看成一个div-->
                            变化点信息管理
                        </th>
                        <th scope="col" colspan="3">
                           <form>
                            <div >
                                <input type="file" id="exampleFormControlFile1" @change="upload()" accept=".xlsx">
                            </div><!--form里面的input type=file时 处理文件上传需求 @change＝“upload（）” dom元素change事件绑定了一个upload（）方法在vue的methods里-->
                            </form> 
                        </th>
                    </tr>
                    <tr>
                    <th scope="col" width="4%">#</th>
                    <th scope="col" width="20%">工位名称</th>
                    <th scope="col" width="10%">审核日期</th>
                    <th scope="col" width="15%">审核区域</th>
                    <th scope="col" width="7%">类型</th>
		            <th scope="col" width="100%">变化点内容</th>
                    <th scope="col" width="10%">是否ok</th>
		            <th scope="col" width="7%">#</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在tr上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th><!--注意标签里属性绑定的值 会直接绑定该值到vue model层里面的data-->
                    <th scope="col">{{item.gongWeiMinChen}}</th>
                    <th scope="col">{{item.shenHeRiQi}}</th>
                    <th scope="col">{{item.shenHeQuYu}}</th>
                    <th scope="col">{{item.leiXin}}</th>
		            <th scope="col">{{item.bianHuaDianLeiRong}}</th>
                    <th scope="col">{{item.okOrNoOk}}</th>
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
                    <pagehelper class="aaaa1" :page="page" ></pagehelper><!--将传过来的属性再次绑定-->
                </div>
		</div>


        <div class="gly2" style="{width: '90%', height: '700px'}">
                
                <div class="gly2mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col" colspan="6"> <!--没记错的话th是块级元素 ？ 可以包裹 甚至也可以包裹表单 可以看成一个div-->
                            变化点问题清单
                        </th>
                        <th scope="col" colspan="5">
                           <form>
                            <div >
                                <input type="file" id="exampleFormControlFile2" @change="upload2()" accept=".xlsx">
                            </div><!--form里面的input type=file时 处理文件上传需求 @change＝“upload（）” dom元素change事件绑定了一个upload（）方法在vue的methods里-->
                            </form> 
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
                    <th scope="col" >#</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata2"><!--v for的最基础用法  这里要循环的是
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
                    <td>
                        <a href="#" @click="delet2(item.id)">
                            删除
                        </a><!--链接由此获得数据库id  item.id本就是从数据库取出来的-->
                    </td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div id="gly1bottom">
                    <pagehelper class="aaaa1" :page="page2" ></pagehelper><!--将传过来的属性再次绑定-->
                </div>
		</div>
        <div id="navback1">

        </div>
	</div>
</template>
<script>
import snav from "./../Nav"
import top from "./../TopCard"
import pagehelper from "../util/pageHelper.vue" //import的变量只能是小写的
export default {
data(){
return{
    tabledata:[],
    tabledata2:[],
    isShow:true,    
    page:{
        pageNum:1,
        handleCurrentChange: val=> {
            this.pageNum=val,
            this.pageChage(val) //data里面可以绑定对象 对象的方法也可以绑定  箭头函数传参 然后调用methods里面的方法传进去
        }
    },
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
              url:'http://localhost:8090/selectALLBianHuaDian',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data //生命周期里面的ajax里面的this仍然指向 当前组件vue实例
              }),
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
      upload(){//上传文件功能
         var e =document.getElementById("exampleFormControlFile1")
         console.log(e.files[0])//e是input这个dom元素 e.files[0]是我们上传的文件 处理文件上传需求的写法
         let file=e.files[0]
         let formdata = new FormData(); //以formdata的格式上传 构造函数生成一个新对象 
         formdata.append("file",file); //对象formdata 的.append方法 
         this.$axios({
	      method:"post",
	      data:formdata,
              url:'http://localhost:8090/exportBianHuaDian',
              }).then((res)=>{
                  console.log(res.data)
              })
        e.value="" //清空e.value
         window.alert("导入成功")
         this.reloaddata()
         this.reload()
         
      },
      upload2(){//上传文件功能
         var e =document.getElementById("exampleFormControlFile2")
         console.log(e.files[0])//e是input这个dom元素 e.files[0]是我们上传的文件 处理文件上传需求的写法
         let file=e.files[0]
         let formdata = new FormData(); //以formdata的格式上传 构造函数生成一个新对象 
         formdata.append("file",file); //对象formdata 的.append方法 
         this.$axios({
	      method:"post",
	      data:formdata,
              url:'http://localhost:8090/exportWenTiQinDan',
              }).then((res)=>{
                  console.log(res.data)
              })
        e.value="" //清空e.value
         window.alert("导入成功")
         this.reloaddata()
         this.reload()
         
      },
      delet(id){//删除记录功能 
          this.$axios({
          method:"post",
          params:{ 
            id:id
          },
              url:'http://localhost:8090/deleteBianHuaDianById',
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
              url:'http://localhost:8090/selectALLBianHuaDian',
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
              url:'http://localhost:8090/selectALLBianHuaDian',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data 
              })
      },
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
 .gly2{
    float: right;
    width: 90%;
    position: relative;
    height: 700px;
  }
  
  
 .gly2mid{
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

  #navback1 {
       float: left;
       width: 10%;
       height:570px;
       background:linear-gradient(#243949,#517fa4);
        /*暂时采用这种笨办法*/
   }
</style>