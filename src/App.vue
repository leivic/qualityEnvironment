<template>
  <div id="app">
    
      <router-view></router-view>


  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'; // 官方建议二 从vuex中导入mapState
export default {
  name: 'App',
  async mounted(){//有了await要加async 没有await其他行代码都是不需要加的
    console.log(this.$store.state.name)//直接使用this.$store.state.name 可以获取到仓库里面的值 只是这样不够优雅
    console.log(this.getName)//官方建议一 直接获取计算属性
    console.log(this.name)//官方建议二 连this.$store.state.name都省了
      //修饰器 getter
    console.log(this.$store.getters.getMessage);//使用vuex 修饰器
    console.log(this.getMessage)//官方建议三
      //set
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit('setNumberIsWhat', { number: 666 });  // 调用的时候也需要传递一个对象
    console.log(`新值：${this.$store.state.number}`);
    console.log(`旧值：${this.$store.state.number}`);
    await this.$store.dispatch('setNum', { number: 611 });
    console.log(`新值：${this.$store.state.number}`);


  },
  computed:{
        getName() {
            return this.$store.state.name;//官方建议一 使用计算属性获取vuex仓库里面的值
        },
        ...mapState(['name']),//官方建议二 利用vuex的mapstate
        ...mapGetters(['getMessage']),//官方建议三 使用mapGetters
    },
}
</script>

<style>
[v-cloak]{
    display: none !important;
}
</style>
