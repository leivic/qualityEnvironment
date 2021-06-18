<template>
    <div>
        <div class="modal" tabindex="-1" ><!--只有这个div可以控制显示与否 所以把这个div的css值绑定后传过去-->
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">新建用户</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeForm()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">姓名:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">用户名:</label>
                        <input type="text" class="form-control" id="message-text"> 
                    </div>
                    <div class="form-group">
                        <label for="message-password" class="col-form-label">密码:</label>
                        <input type="text" class="form-control" id="message-password"> 
                    </div>
                    <div class="form-group">
                        <label for="message-select" class="col-form-label">权限:</label>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                {{dropdownMenu}}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" @click="getReault('普通用户')">普通用户</a>
                                <a class="dropdown-item" @click="getReault('工作者')">工作者</a>
                                <a class="dropdown-item" @click="getReault('管理员')">管理员</a><!--用事件绑定方法来传值-->
                            </div>
                            </div>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeForm()">关闭</button>
                    <button type="button" class="btn btn-primary">保存</button>
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
           dropdownMenu:"请选择权限" //vue组件实例data里面的值可以绑定在 html标签的属性值 {{}}绑定  
        }
    },
    mounted(){
     
    },
    methods:{
        getReault(option){ //形参的写法 
          this.dropdownMenu=option
      },
        closeForm(){
            var a =document.getElementsByClassName("modal")[0]//通过getElementsByClassName获得的dom元素对象 是个数组 
            a.style.display="none"//该dom元素对��的 style属性的display属性 dom操作css写法 
        } 
    },
       
    
}
</script>
<style>
    
</style>