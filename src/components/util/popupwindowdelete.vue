<template>
	<div>
		<div class="modal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Modal title</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p>确认要删除这一行吗？</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-primary" @click="delet(id)">确定</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods:{
		delet(id){//删除记录功能
			console.log(this.id) 
			this.$axios({
			method:"post",
			params:{ 
			id:id
			},
			url:'http://localhost:8090/deleteBianHuaDianById',
			}).then((res)=>{
				console.log(res.data)
			})
		}
	},
	props:["id"]
}
</script>
<style>

</style>