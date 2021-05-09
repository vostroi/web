<!-- 主页面 -->
<template>
	<el-container>
		<el-header style="text-align: right; font-size: 12px">
			<div style="float: left;">
				<el-button :icon="iconClass" @click="expand()" circle type="success" size="small"></el-button>
			</div>
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>查看</el-dropdown-item>
					<el-dropdown-item>新增</el-dropdown-item>
					<el-dropdown-item>删除</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>{{$store.state}}</span>
		</el-header>
		<el-container>
			<!-- <el-aside width> 这样写可以解决横向滚动条问题和收起菜单 宽度问题 -->
			<el-aside width>
				<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="!isCollapse">
					<el-menu-item index="0" @click="$router.push('/home/welcome/你进入了首页')"><i
							class="el-icon-s-home"></i><span slot="title">首页</span></el-menu-item>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i><span slot="title">系统管理</span></template>
						<el-menu-item index="1-1">
							<span slot="title">
								<!-- 超链接方式，使用组件名称跳转 传递参数-->
								<router-link :to="{path:'/home/menu',query:{infos:22113}}">菜单设置</router-link>
							</span>
						</el-menu-item>
						<!-- 点击事件，命名路由方式：使用组件name跳转，传递参数 -->
						<el-menu-item index="1-2" @click="$router.push({name:'SystemCfg',params:{'id':'vostroi'}})">
							<span slot="title">系统参数</span>
						</el-menu-item>
						<el-menu-item index="1-3" @click="$router.push({path:'/home/org',query:{'id':'张三丰来了'}})"><span
								slot="title">组织结构</span></el-menu-item>
						<el-menu-item index="1-4" @click="jumpPage"><span slot="title">角色管理</span></el-menu-item>
						<el-submenu index="1-5">
							<template slot="title"><span slot="title">测试刷新后调用store中方法</span></template>
							<el-menu-item index="1-5-1"  @click="tstStore" ><span slot="title">点我4-1</span></el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i><span slot="title">导航二</span></template>
						<el-menu-item index="2-1"><span slot="title">选项1</span></el-menu-item>
						<el-menu-item index="2-2"><span slot="title">选项2</span></el-menu-item>
						<el-menu-item index="2-3"><span slot="title">选项3</span></el-menu-item>
						<el-submenu index="2-4">
							<template slot="title"><span slot="title">选项4</span></template>
							<el-menu-item index="2-4-1"><span slot="title">选项4-1</span></el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i><span slot="title">导航三</span></template>
						<el-menu-item index="3-1"><span slot="title">选项1</span></el-menu-item>
						<el-menu-item index="3-2"><span slot="title">选项2</span></el-menu-item>
						<el-menu-item index="3-3"><span slot="title">选项3</span></el-menu-item>
						<el-submenu index="3-4">
							<template slot="title"><span slot="title">选项4</span></template>
							<el-menu-item index="3-4-1"><span slot="title">选项4-1</span></el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<!-- 内容 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>


</template>

<script>
	import "@/assets/css/global.css"

	export default {
		name: "Home",
		data() {
			return {
				isCollapse: true,
				iconClass: 'el-icon-s-fold'
			}
		},
		mounted() {
			
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			// 收起 展开菜单
			expand() {
				if (this.isCollapse) {
					this.iconClass = 'el-icon-s-unfold';
				} else {
					this.iconClass = 'el-icon-s-fold';
				}
				this.isCollapse = !this.isCollapse;
			},
			// 页面跳转
			jumpPage() {
				this.$router.push({
					name: 'RoleCfg',
					params: {
						'roleData': [{
								'id': '110100',
								'name': 'ADMIN'
							},
							{
								'id': '110200',
								'name': 'USER'
							}

						]
					}
				});
			},
			tstStore(){
				let that = this;
				console.log(this.$store.getters.getUser);
				console.log(this.$store.state.LOGIN_USER.password);
			}
		}

	}
</script>

<style scoped>
	/* 导航菜单去掉边框 */
	.el-menu {
		border: 0;
		text-align: left;
	}

	::-webkit-scrollbar {
		width: 5px;
		height: 10px;
	}

	::-webkit-scrollbar-track-piece {
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:vertical {
		height: 5px;
		background-color: rgba(125, 125, 125, 0.7);
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:horizontal {
		width: 5px;
		background-color: rgba(125, 125, 125, 0.7);
		-webkit-border-radius: 6px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
