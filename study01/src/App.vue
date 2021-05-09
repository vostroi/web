<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name:"App",
		created() {
			// 3.4 问题：页面刷新后，存储的对象就不见了（因为是单页面应用，一刷新就恢复到了页面最初始的状态）
			// 3.5 解决：
			// 	3.5.1. 监听刷新事件，将store中的对象，字符串化后存入 sessionStorage（经测试，监听事件有问题）
			// 	3.5.2 登录成功后，存入用户信息到session，刷新后去后台获取；或者每次更新state都向session中全量写入最新的state
			window.addEventListener('beforeunload' , this.saveState());
		},
		methods:{
			saveState(){
				debugger;
				console.log("刷新 还没保存",JSON.stringify(this.$store.state));
				// vuex没模块化之前写法
				// sessionStorage.setItem('STATE_DATA',JSON.stringify(this.$store.state));
				// vuex模块化之后写法.state.模块名字
				sessionStorage.setItem('STATE_DATA',JSON.stringify(this.$store.state.user));
				
				console.log("刷新 保存到SESSION",sessionStorage.getItem('STATE_DATA'));
			}
		}
	}
	
	
</script>


<style>

</style>
