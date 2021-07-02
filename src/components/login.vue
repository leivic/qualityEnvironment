<template>
    <div>
        <div id="back">
        <h1 class="animate__animated animate__backInDown title" style="color:#FFFFFF">质量生态文明数字化平台</h1>
        <div id="loginmain">
            <form >
            <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <div id="loginbtn">
            <button type="button" class="btn btn-primary" v-on:click="subm">登录</button>
            </div>
            </form>
        </div>
            <div class="kuang">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            </div>
    </div>

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
<style scoped>
#back{
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
}
 #loginmain{
        width: 30%;
        height: 400px;
        margin: 140px auto;
        color: white;
    }
    #loginbtn{
        width: 18%;
        margin-top: 5px;
        float: right;
    }
    .title{
        margin-top: 130px;
        text-align: center;
        font-size: 60px;
        font-family: fantasy;
        color:black;
    }
    #emailHelp{
        color: white;
    }
 .kuang{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -10;
            background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);

        }

        .bubble{
            position: absolute;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: inset 0 0 8px  #fff;
            animation: flutter 10s infinite;
            opacity: 0;
        }
        @keyframes flutter {
            0%{
                transform: translateX(0);
                bottom: -100px;
                opacity: 1;
            }
            50%{
                transform: translateX(100px);
                opacity: 0.5;
            }

            
            100%{
                transform: translateX(0px);
                bottom: 100%;
                opacity: 0;

            }
        }
        .bubble:nth-child(1){
            left: -10%;
            width: 50px;
            height: 50px; 
            animation-duration: 9s;
            animation-delay: 0.1s;
        }
        .bubble:nth-child(2){
            left: 15%;
            width: 20px;
            height: 20px;
            animation-duration: 6s;
            animation-delay: 1.5s;

        }
        .bubble:nth-child(3){
            left: 20%;
            width: 60px;
            height: 60px;
            animation-duration: 10s;
            


        }
        .bubble:nth-child(4){
            left: 30%;
            width: 30px;
            height: 30px;
            animation-duration: 5.5s;
            animation-delay: 1.5s;

        }
        .bubble:nth-child(5){
            left: 40%x;
            width: 50px;
            height: 50px;
            animation-duration: 12s;
            


        }
        .bubble:nth-child(6){
            left: 50%;
            width: 20px;
            height: 20px;
            animation-duration: 6s;
            animation-delay: 1s;

        }
        .bubble:nth-child(7){
            left: 60%;
            width: 40px;
            height: 40px;
            animation-duration: 8s;
            animation-delay: 1s;

        }
        .bubble:nth-child(8){
            left: 65%;
            width: 60px;
            height: 60px;
            animation-duration: 15s;
          
        }
        .bubble:nth-child(9){
            left: 80%;
            width: 55px;
            height: 55px;
            animation-duration: 9s;
            animation-delay: 0.5s;
            
        }
        .bubble:nth-child(10){
            left: 100%;
            width: 40px;
            height: 40px;
            animation-duration: 12s;

        }


</style>
   