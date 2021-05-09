import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
// 正面写法，会导致this.axios 使用有问题
// Vue.use(axios , VueAxios)

// 这种方式也可解决 this.axios使用问题
// Vue.prototype.axios=axios;

// axios配置跨域
axios.defaults.baseURL = '/api'
// 全局的路由钩子函数 可以理解为每次路由跳转都要调用
router.beforeEach((to, from, next) => {
	// 逻辑有问题，先注释
	// console.log("store="+JSON.stringify(store.state));
	// let userInfo = store.state.LOGIN_USER;
	// // 注销 清空登录信息
	// if(to.path=='/logout'){
	// 	sessionStorage.clear();
	// 	// 跳转到登录页面
	// 	next({path:'/'});
	// }
	// // 如果是 跳转到登录页面
	// else if(to.path == '/index' || to.path == '/' || to.path == '/login'){
	// 	if(userInfo != null){
	// 		next({path:'/home'});
	// 	}else{
	// 		next();
	// 	}
	// }
	// // 不能放在第一个判断，否则第一次进入时（本来就没登录）会死循环
	// else if(userInfo == null && from.path == '/'){
	// 	// 跳转到登录页面
	// 	next({path:'/'});
	// }
	// else{
		next();
	// }

});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
