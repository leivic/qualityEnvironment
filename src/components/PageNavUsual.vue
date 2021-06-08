<template>
    <div>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"  aria-label="Previous" :href="href1" :onclick="click1">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link"  :href="href2">1</a></li>
    <li class="page-item"><a class="page-link" :href="href3">2</a></li>
    <li class="page-item"><a class="page-link" :href="href4">3</a></li>
    <li class="page-item">
      <a class="page-link"  aria-label="Next" :href="href5">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
</template>
<script>
export default {
    props:["href1","href2","href3","href4","href5","click1"]
}
</script>
<style>

</style>