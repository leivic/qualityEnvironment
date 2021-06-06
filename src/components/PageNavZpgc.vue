<template>
 <nav aria-label="Page navigation example" id="pageNav">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#/zpgc1">1</a></li>
    <li class="page-item"><a class="page-link" href="#/zpgc2">2</a></li>
  </ul>
</nav>
</template>
<script>
export default {
 created(){
   console.log("测试执行顺序")
   
 }   
}
</script>
<style>
    #pageNav{
        position: absolute;
        right: 5px;
        top: 105px;
    }
</style>