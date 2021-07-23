<template>
    <div>
        <div class="text animate__animated animate__zoomIn">
            <div class="titleBox">
                <img  />
            <div class="title">法律服务</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        var vm=this
        const promise1 =new Promise(function(resolve,reject){
            vm.$axios({ //此处的this 是构造函数里面 指向新对象 不是组件实例了 所以用vm
              method:"post",
              url:'http://localhost:8090/findALLUser',
              params:{
                  pageNum:1
              }
              }).then((res)=>{
                  if(res.data!=""){
                      resolve("获取到数据")//如果我是resolve（res.data）呢
                      console.log(res.data)
                  }
                  else{
                      reject("未获取到数据")
                  }
            })
        })
        const promise2 =new Promise(function(resolve,reject){
            vm.$axios({ //此处的this 是构造函数里面 指向新对象 不是组件实例了 所以用vm
              method:"post",
              url:'http://localhost:8090/selectAllWenJian',
              params:{
                  pageNum:1
              }
              }).then((res)=>{
                  if(res.data!=""){
                      resolve("获取到数据")//如果我是resolve（res.data）呢 Promise.all()的result该是多少
                      console.log(res.data)
                  }
                  else{
                      reject("未获取到数据")
                  }
            })
        }) 
        promise1.then(function(){ //试了一下 如果上面执行的是 reject 会报一个错 不会执行这个函数 那么是不是就该轮到.catch方法了? 
            vm.$axios({
                method:"post",
                url:'http://localhost:8090/selectAllWenTiQinDan',
                params:{
                    pageNum:1
                }
                }).then((res)=>{
                    if(res.data!=""){
                        console.log(res.data)
                    }
                    else{
                        console.log("未获取到数据")
                    }
                })
        })
        Promise.all([promise1,promise2]).then(function(results){//Promsie.all()方法是promise原型上的一个静态方法 所以未shengcheng实例直接使用
            console.log(results)//["获取到数据"，"获取到数据"] results是两个数据的值
        })

}}
</script>
<style>

</style>