import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/comm/Welcome.vue'
import MenuCfg from '../views/sys_manage/MenuCfg'
import SystemCfg from '../views/sys_manage/SystemCfg'
import Orgnization from '../views/sys_manage/Orgnization'
import RoleCfg from '../views/sys_manage/RoleCfg'




Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		// 路由懒加载
		component: () => import('../views/login/Login')
	},
	{
		path: '/index',
		redirect:'/'
	},
	{
		path: '/main',
		name: 'Login',
		// 路由懒加载
		component: () => import('../views/login/Login')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/home/Home'),
		// 嵌套路由不支持懒加载，需要先将组件引入
		// 嵌套路由path不能以/开头
		children: [{
				path: 'welcome/:infos',
				name: 'Welcome',
				component: Welcome
			},
			{
				path: 'menu',
				name: 'Menu',
				component: MenuCfg
			},
			{
				path: 'syscfg',
				name: 'SystemCfg',
				component: SystemCfg
			},
			{
				path: 'org',
				name: 'Orgnization',
				component: Orgnization
			},
			{
				path: 'role',
				name: 'RoleCfg',
				component: RoleCfg,
				props:true
			}
		]
	},
	
	
	
	
	
	
	
	
	
	
	// 404页面要配置在最后
	{
		path: '*',
		name: 'P404',
		component: () => import('../views/comm/P404')
	}
]

const router = new VueRouter({
	mode:'history',
	routes
})

export default router
