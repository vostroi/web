<!-- 登录成功后欢迎页面 -->
<template>
	<el-container>
		<h2>登录成功欢迎页面,传递的参数：{{$route.params.infos}}</h2>
	</el-container>
</template>

<script>
	export default {
		name: "Welcome",
		data() {
			return {
			}
		},
		methods: {
		}

	}
</script>

<style>
</style>
