<template>
	<div>
		<top></top>
		<snav styadmin="color:#99FFFF"></snav><!--子组件绑定值在props里面 传到父组件参数成了标签的属性-->
		<div id="gly1" style="{width: '85%', height: '550px'}">
                <div id="gly1top">
                    <div id="gly1topleft3">
                        <h3>工位覆盖率信息管理</h3>
                    </div>
                    <div id="gly1topright ">
                        <form>
                            <div class="glyzpgwrightbox">
                                <input type="file" id="exampleFormControlFile1" @change="upload()" accept=".xlsx">
                            </div><!--form里面的input type=file时 处理文件上传需求 @change＝“upload（）” dom元素change事件绑定了一个upload（）方法在vue的methods里-->
                        </form>
                    </div>
                </div>
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col" width="4%">#</th>
                    <th scope="col" width="15%">工位号</th>
                    <th scope="col" width="10%">区域</th>
                    <th scope="col" width="15%">检测时间</th>
		            <th scope="col" width="7%">#</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata" v-if="isShow"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在tr上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" width="10%">{{item.id}}</th><!--注意标签里属性绑定的值 会直接绑定该值到vue model层里面的data-->
                    <th scope="col" width="30%">{{item.jianCeGongWei}}</th>
                    <th scope="col" width="25%">{{item.jianCeShiJian}}</th>
                    <th scope="col" width="25%">{{item.quYu}}</th>
                    <td width="10%">
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
        <div id="additional">
            <div></div>
            <div id="additional_right">
                <h5 style="text-align:center">工位数配置</h5>
                冲压：{{gongwei.chongya}} ----
                车身：{{gongwei.cheshen}}<br/>
                涂装：{{gongwei.tuzhuang}} ----
                总装：{{gongwei.zongzhuang}}<br/>
                机加：{{gongwei.jijia}} ----
                装配：{{gongwei.zhuangpei}} <br/>
                <br/>总数：{{gongwei.zongshu}}
            </div>
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
    isShow:true,    
    page:{
        pageNum:1,
        handleCurrentChange: val=> {
            this.pageNum=val,
            this.pageChage(val) //data里面可以绑定对象 对象的方法也可以绑定  箭头函数传参 然后调用methods里面的方法传进去
        }
    },
    gongwei:{
        chongya:"",
        cheshen:"",
        tuzhaung:"",
        zongzhuang:"",
        jijia:"",
        zhuangpei:"",
        zongshu:""
    }
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
              url:'http://localhost:8090/selectAllGongWeiFuGaiLv',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data //生命周期里面的ajax里面的this仍然指向 当前组件vue实例
              })

    //下方的ajax查找所有工位数的数据 并设data里面的数据为下方的数据
     this.$axios({
	      method:"get",
              url:'http://localhost:8090/selectAllGongWeiShu',
              }).then((res)=>{
                  console.log(res.data)
                  this.gongwei.chongya=res.data[0].gongWeiShu
                  this.gongwei.cheshen=res.data[1].gongWeiShu
                  this.gongwei.tuzhuang=res.data[2].gongWeiShu
                  this.gongwei.zongzhuang=res.data[3].gongWeiShu
                  this.gongwei.jijia=res.data[4].gongWeiShu
                  this.gongwei.zhuangpei=res.data[5].gongWeiShu
                  this.gongwei.zongshu= parseInt(res.data[0].gongWeiShu)+parseInt(res.data[1].gongWeiShu)+parseInt(res.data[2].gongWeiShu)+parseInt(res.data[3].gongWeiShu)+parseInt(res.data[4].gongWeiShu)+parseInt(res.data[5].gongWeiShu)
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
              url:'http://localhost:8090/exportGongWeiFuGaiLv',
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
              url:'＃',
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
              url:'http://localhost:8090/selectAllGongWeiFuGaiLv',
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
              url:'http://localhost:8090/selectAllGongWeiFuGaiLv',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata=res.data 
              })
      }
  }
}
</script>
<style scoped>
 #gly1{
    float: right;
    width: 85%;
    height: 600px;
    position: relative;
    
  }
  #gly1top{
      height: 10%;
      padding: 3px;
  }
  #gly1topleft3{
      float: left;
      height: 100%;
      width: 35%;
     
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
 #gly1mid{
     text-align: center;
 }
  .list-group{
      width: 70%;
      margin: 0 auto;
      margin-top: 10px;
  }
  
  li:hover {
    cursor: pointer;
  }
  #aaaa1 {
      float: right;
  }
  #additional{
      width: 85%;
      position: absolute;
      right:0px;
      top: 670px;
    
  }
  #additional_right{
      width: 50%;
      float: right;
      
  }
</style>