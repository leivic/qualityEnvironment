<template>
    <div>
        <div class="card ca">
            <div class="card-body">
                <div id="card">
                    <h1 class="card-title">SGMW质量生态文明数字化平台</h1>
                </div>
               <div id="imgwulin">
                </div>
                <div id="userinfo">
                    <div class="userinfobox">当前用户:{{user}}</div>
                    <div class="userinfobox">当前角色:{{role}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            /*
            user: this.display.username, /*js的this指向 这里的this指的是当前实例 所以指的是这个页面topcard的vue实例 并不是根实例
            role: this.display.role  全局变量的使用  这种写法浏览器刷新全局变量会丢失*/ 
            user: sessionStorage.getItem("username"),//sessionStorage 是很明显的全局对象 window对象 上面的this是这个组件实例
            role: sessionStorage.getItem("authority")
        }
    }
}
</script>
<style scoped>
 .ca {
     height: 100px;
     background-image: linear-gradient(#243949,#517fa4);
     color:white

 }
 #card{
     float: left;
     width: 70%;
     
 }
 #imgwulin{
     position: absolute;
     top:5px;
     left: 49%;
     width: 18%;
     height: 85px;
     border-radius: 150px;
     background-image: url(../assets/wulin.jpeg);
     background-size: 100% 100%;
 }
 #userinfo{
     float: right;
     width: 30%;
     line-height: 100%;
     margin-top: 10px;
     color: white;
     
 }
 .userinfobox{
     float: right;
     width: 45%;
     height: 100%;
     line-height: 100%;
 }
</style>