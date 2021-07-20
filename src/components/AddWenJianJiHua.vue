<template>
    <div>
        <div class="modal1" tabindex="-1" ><!--只有这个div可以控制显示与否 所以把这个div的css值绑定后传过去-->
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新建计划</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeForm()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">区域:</label>
                        <input type="text" class="form-control" id="recipient-name" v-model="quyu">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">计划数:</label>
                        <input type="text" class="form-control" id="message-text" v-model="jihua"> 
                    </div>
                    <div class="form-group">
                        <label for="message-select" class="col-form-label">日期:</label>
                        <div id="monthpickkerbox">
                        <el-date-picker  id="monthpicker" type="month" value-format="yyyy-MM" v-model="month1"></el-date-picker></el-date-picker>
                        </div><!--elment ui 库的标签 v-model双向绑定month1 绑定了一个vue组建实例的data值-->
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeForm()">关闭</button>
                    <button type="button" class="btn btn-primary" @click="export1()">保存</button>
                </div>
                </div>
            </div>
            </div>
    </div>   
</template>
<script>
export default {
    data(){
        return{
           month1:"",
           quyu:"",
           jihua:""
        }
    },
    mounted(){
     
    },
    methods:{
       
        closeForm(){
            var a =document.getElementsByClassName("modal1")[0]//通过getElementsByClassName获得的dom元素对象 是个数组 
            a.style.display="none"//该dom元素对��的 style属性的display属性 dom操作css写法 
        },
        export1(){
           this.$axios({
              method:"post",
              url:'http://localhost:8090/addWenJianXiuDinjihua',
              params:{
                  quYu:this.quyu,
                  jiHuaShu:this.jihua,
                  date:this.month1
              }
              }).then((res)=>{})

           var a =document.getElementsByClassName("modal1")[0]//通过getElementsByClassName获得的dom元素对象 是个数组 
            a.style.display="none"//该dom元素对��的 style属性的display属性 dom操作css写法
            alert("新建成功")  
        }
    },
       
    
}
</script>
<style>
    .modal1{
        position:absolute;
        left: 32%;
        z-index: 99;
        width: 35%;
    }
</style>