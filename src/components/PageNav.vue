<template>
 <nav aria-label="Page navigation example" id="pageNav">
  <ul class="pagination pagination-sm">
    <li class="page-item"><a class="page-link" :href="href1">表1</a></li>
    <li class="page-item"><a class="page-link" :href="href2">表2</a></li>
  </ul>
</nav>
</template>
<script>
export default {
 created(){
   console.log("测试执行顺序")
   
 },
 props:["href1","href2"]   
}
</script>
<style>
    #pageNav{
        position: absolute;
        right: 1px;
        top: 100px;
    }
</style>