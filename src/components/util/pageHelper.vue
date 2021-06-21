<template>
    <div>
        <el-pagination
            background
            @current-change="page.handleCurrentChange"
            :current-page="page.pageNum"
            :page-sizes="[7]"
            layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
    </div>
</template>
<script>
export default {
    props:["page"],
    //total:Number, 
    data(){
        return {
            
        }
    },
    
}
</script>
<style>
    
</style>
