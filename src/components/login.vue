<template>
    <div>
        <div id="loginmain">
            <form >
            <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username">
                <small id="emailHelp" class="form-text text-muted" >欢迎使用质量生态文明数字化平台</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <div id="loginbtn">
            <button type="button" class="btn btn-primary" v-on:click="subm">提交</button>
            </div>
            </form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        subm:function(event){
            var that = this //不需要that 此处的对象仍然是vue组件实例 subm是vue组件实例的一个方法 
            this.$axios({
              method:"post",
              url:'http://localhost:8090/login',
              params:{
                  username:that.username,
                  password:that.password
              }
              }).then((res)=>{
                  console.log(res.data)
                  if(res.data.status=="success"){
                      this.getUser()
                  }
                  else{
                      alert("用户名密码错误"),
                      that.username="",
                      that.password=""
                  }
              })
        },
        getUser:function(event){
            var that = this
             this.$axios({
              method:"get",
              url:'http://localhost:8090/a1',
              }).then((res)=>{
                  console.log(res.data);
                  this.display.username=res.data.username
                  switch (res.data.authorities[0].authority){
                      case "ROLE_admin":
                          that.display.display1=true,
                          that.display.display2=true,
                          that.display.display3=true,
                          that.display.display4=true,
                          that.display.display6=true,
                          that.display.display14=true,
                          that.display.role="管理员"
                          console.log(this.display.display1),
                          console.log(this.display.display2),
                          console.log(this.display.display3),
                          console.log(this.display.display4),
                          console.log(this.display.display5),
                          console.log(this.display.display20)
                          window.location.href="http://localhost:8080/#/xyjf"
                            break;
                      case "ROLE_user":
                          that.display.display1=true,
                          that.display.display4=true,
                          that.display.role="普通用户"
                          console.log(this.display.display1),
                          console.log(this.display.display2),
                          console.log(this.display.display3),
                          console.log(this.display.display4),
                          console.log(this.display.display5),
                          console.log(this.display.display20)
                          window.location.href="http://localhost:8080/#/xyjf"
                           break;
                           }
              })
        }
    },
    
}
</script>
<style>
    #loginmain{
        width: 30%;
        height: 400px;
        margin: 250px auto;
    }
    #loginbtn{
        width: 18%;
        margin-top: 5px;
        float: right;
    }
</style>