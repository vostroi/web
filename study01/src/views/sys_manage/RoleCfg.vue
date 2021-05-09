<template>
	<el-container>
		<h2>角色配置页面，传递的参数：{{ this.$route.params.roleData }}</h2>
	</el-container>
</template>

<script>
	export default {
		name: 'RoleCfg',
		props:['roleData'],
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			getJsonData(){
				this.axios({
					method:'get',
					url:'/info.json'
				})
				.then(resp=>console.log(resp))
				.catch(error=>console.error(error));
			}
		},
		beforeRouteEnter: ((to, from, next)=>{
			console.log("进入角色管理页面");
			// 这里next的参数是一个回调函数
			next(vm=>{
				// 通过VM来访问组件实例
				vm.getJsonData();
			});
		}),
		beforeRouteLeave:(to , from , next)=>{
			console.log("离开角色管理页面");
			next();
		}
	}
</script>

<style>
</style>
