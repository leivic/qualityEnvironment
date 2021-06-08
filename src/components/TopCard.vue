<template>
    <div>
        <div class="card ca">
            <div class="card-body">
                <div id="card">
                    <h1 class="card-title">SGMW质量生态文明数字化平台</h1>
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
            user: this.display.username,
            role: this.display.role  /*全局变量的使用*/
        }
    }
}
</script>
<style scoped>
 .ca {
     height: 100px;
 }
 #card{
     float: left;
     width: 70%;
 }
 #userinfo{
     float: right;
     width: 30%;
     line-height: 100%;
     margin-top: 10px;
     color: dodgerblue;
 }
 .userinfobox{
     display: inline-block;
     width: 45%;
     height: 100%;
     line-height: 100%;
 }
</style>