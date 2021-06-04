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
            <button type="submit" class="btn btn-primary" v-on:click="subm">提交</button>
            </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        subm:function(event){
            var that = this;
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
                      window.location.href="http://localhost:8080/#/xyjf"
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