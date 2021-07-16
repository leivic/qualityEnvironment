<template>
<div>
	<top></top>
	<snav styadmin="color:#99FFFF"></snav>
	<div id="gly1" style="{width: '85%', height: '550px'}"> 
                <div id="gly1mid">
                    <table class="table">
			<thead class="thead-light">
				<tr>
					<th>
						<el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1">{{month1}}</el-date-picker>
					</th><!--elementui提供的日期选择器-->
					<th scope="col" colspan="2">文件修订计划配置</th>
					<th scope="col" ><!--新增 更改等按钮-->

					</th> 
				</tr>
				<tr>
					<th scope="col" width="10%">#</th>
					<th scope="col" width="30%">区域</th>
					<th scope="col" width="30%">计划数</th>
					<th scope="col" width="30%">#</th> 
				</tr>
			</thead>
			<tbody>
					<tr v-for="item in tabledata1"><!--v for的最基础用法  这里要循环的是
					这个tr，这一行 当然也包括行里的每一个单元格 所以在行上v－for 在单元格上取值 tabledata是直接绑定在
					下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
					item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
					<th scope="row" >{{item.id}}</th>
					<th scope="col">{{item.quYu}}</th>
					<th scope="col">{{item.jiHuaShu}}</th>
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
                   
                </div>
	</div>

	<!--下方是文件修订信息-->
	<div id="gly1" style="{width: '85%', height: '550px'}">
                
                <div id="gly1mid">
                    <table class="table">
                <thead class="thead-light">
                    <tr>
                       <th scope="col" colspan="4">文件修订信息</th>
                        <th scope="col" colspan="2">
                                <form>
                                <div class="glyzpgwrightbox">
                                <input type="file" id="exampleFormControlFile1" @change="upload()" accept=".xlsx">
                                </div><!--form里面的input type=file时 处理文件上传需求 @change＝“upload（）” dom元素change事件绑定了一个upload（）方法在vue的methods里-->
                                </form>
                        </th> 
                    </tr>
                    <tr>
                    <th scope="col" width="4%">#</th>
                    <th scope="col" width="12%">评审日期</th>
                    <th scope="col" width="9%">区域</th>
                    <th scope="col" width="10%">文件名称</th>
                    <th scope="col" width="12%">修改类型</th>
		    <th scope="col" width="9%">#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tabledata2"><!--v for的最基础用法  这里要循环的是
                    这个tr，这一行 当然也包括行里的每一个单元格 所以在tr上v－for 在单元格上取值 tabledata是直接绑定在
                    下面data里面的数组数据 item就代表每一项 应用场景：1.动态获取相同格式数据时 2.接收后端列表，循环取出每一条时
                    item.id 直接和对象数组的用法一样的 item就是每个对象 可以使用.语法 取属性 -->
                    <th scope="row" >{{item.id}}</th><!--注意标签里属性绑定的值 会直接绑定该值到vue model层里面的data-->
                    <th scope="col">{{item.pinShenRiQi}}</th>
                    <th scope="col">{{item.quYu}}</th>
                    <th scope="col">{{item.wenJianMinChen}}</th>
                    <th scope="col">{{item.xiuGaiLeiXin}}</th>
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
		<div id="navback1">

       		</div>
</div>	
</template>
<script>
import snav from "./../Nav"
import top from "./../TopCard"
import pagehelper from "./../util/pageHelper.vue"
import getChart from '@/util'
export default {
data(){
	return{
		month1:"",
		tabledata1:[],
		tabledata2:[],
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
  this.month1=getChart.getmon()//获得当月月份 month1改变 
  
  this.$axios({
		method:"post",
		url:'http://localhost:8090/selectAllWenJian',
		params:{
      			pageNum:this.page.pageNum
		},
    }).then((res)=>{
      console.log(res.data)
      this.tabledata2=res.data
    }
    )
	
},
watch:{
	month1(newVal,oldVal){ //month1改变时ajax传参 
		console.log(newVal+","+oldVal)
		var that=this
		this.$axios({
		method:"post",
		url:'http://localhost:8090/selectWenJianXiuDinByDate',
		params:{
      			date:this.month1,
		},
    }).then((res)=>{
      console.log(res.data)
      this.tabledata1=res.data
    }
    )}
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
              url:'http://localhost:8090/exportWenJianXiuDin',
              }).then((res)=>{
                 
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
              url:'http://localhost:8090/deleteWenJian',
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
              url:'http://localhost:8090/selectAllWenJian',
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
          this.page.pageNum=val
          console.log(val)
          this.$axios({
	      method:"post",
	      params:{
                  pageNum:this.page.pageNum
              },
              url:'http://localhost:8090/selectAllWenJian',
              }).then((res)=>{
                  console.log(res.data)
                  this.tabledata2=res.data 
              })
      }
  }
}

</script>
<style>
#monthpicker{
    border:none;      /*scoped时 该css失效  应该和组件css的特殊性质有关 */
    background: none;  
  }
#gly1{
    float: right;
    width: 85%;
    position: relative;
    height: 550px;
    overflow-y:auto; /*看起来是搭配高度食用的*/
  }
 .glyzpgwrightbox{
      float: right;
      margin-left: 3px;
  }
 #gly1mid{
     text-align: center;
      white-space: nowrap;
     overflow-x: auto;
     overflow-y:auto;
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
  #navback1 {
       float: left;
       width: 15%;
       height:500px;
       background:linear-gradient(#243949,#517fa4);
        /*暂时采用这种笨办法*/
   }
</style>