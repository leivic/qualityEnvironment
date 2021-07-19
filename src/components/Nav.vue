<template>
    <div>
       <div id="navback">
        <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8080/#/xyjf" :style="styxyjf" style="color:#FFFFFF">质量信用积分 </a>
                </li>
                <li class="nav-item dropright">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="stysthj" style="color:#FFFFFF">
                    质量生态环境
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                        <a class="dropdown-item" href="http://localhost:8080/#/zpgc1">自评过程</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/gccc1">过程抽查</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/zpgw">自评工位</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/gwcc">工位抽查</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/wjxd1">文件修订</a>
                    </div>
                </li>
                <li class="nav-item dropright">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="stystys" style="color:#FFFFFF">
                    质量生态意识
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="http://localhost:8080/#/gwfgl">工位覆盖率</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/gwzlstyszt">工位质量生态意识状态</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/bhd">变化点</a>
                    </div>
                </li>
                <li class="nav-item dropright">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="styadmin" style="color:#FFFFFF">
                    admin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="http://localhost:8080/#/adminyhxx">用户信息管理</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/glyzpgw">工位信息管理</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/glygccc">过程信息管理</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/glygwfhl">工位覆盖率信息管理</a> 
                        <a class="dropdown-item" href="http://localhost:8080/#/glygwzlstys">工位质量生态意识信息管理</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/glybhd">变化点信息管理</a>
                        <a class="dropdown-item" href="http://localhost:8080/#/glywjxd">文件修订管理</a>
                    </div>
                    
                </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
export default {
props:["styxyjf","stysthj","stystys","styadmin"]//vue中 html标签的属性都能绑定 不管是style href class id  value :style="thestyle" 就行 将属性绑定到model层 成了vue实例的一个data  直接在data里面的return thestyle："“赋值就成 vue里面调用直接 this.thestyle＝“”就成  
}
</script>
<style scoped>
   .navbar-nav{
       position: fixed;
       left: 0px;
       top: 100px;
       z-index: 100;
       color: white !important;
   } 
   #navback{
       float: left;
       width: 10%;
       height:830px;
       background:linear-gradient(#243949,#517fa4);
        /*之前是这样写的  float: left;
       width: 15%;
       height:750px;
       background:linear-gradient(#243949,#517fa4); 但是这样很明显有问题 一般我们不设置高度的 要让他自适应高度 
       但是这里如果不设置高度 背景色就不能自适应填充 这个问题后面再处理 */
   }
</style>