<template>
    <div>
       <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:8080/#/xyjf" :style="styxyjf">质量信用积分 </a>
            </li>
            <li class="nav-item dropright">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="stysthj">
                质量生态环境
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <a class="dropdown-item" href="http://localhost:8080/#/zpgc1">自评过程</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/gccc1">过程抽查</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/zpgw">自评工位</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/gwcc">工位抽查</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/wjxd1">文件修订</a>
                    <a class="dropdown-item" href="#">文明工作者</a>
                </div>
            </li>
            <li class="nav-item dropright">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="stystys">
                质量生态意识
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">工位覆盖率</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/gwzlstyszt">工位质量生态意识状态</a>
                    <a class="dropdown-item" href="#">变化点</a>
                </div>
            </li>
            <li class="nav-item dropright">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" :style="styadmin">
                admin
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="http://localhost:8080/#/adminyhxx">用户信息管理</a>
                    <a class="dropdown-item" href="http://localhost:8080/#/glyzpgw">工位信息管理</a>
                     <a class="dropdown-item" href="http://localhost:8080/#/glygccc">过程信息管理</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
props:["styxyjf","stysthj","stystys","styadmin"]//vue中 html标签的属性都能绑定 不管是style href class id  value :style="thestyle" 就行 将属性绑定到model层 成了vue实例的一个data  直接在data里面的return thestyle："“赋值就成 vue里面调用直接 this.thestyle＝“”就成  
}
</script>
<style>
   .navbar-nav{
     
       position: fixed;
       left: 0px;
       top: 100px;
   } 
</style>