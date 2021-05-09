import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'

// export default new Vuex.Store({
// 	// 全局的对象，用于保存所有组件 的公共数据
// 	state : sessionStorage.getItem('STATE_DATA') ? JSON.parse(sessionStorage.getItem('STATE_DATA')) : {
// 		LOGIN_USER:{
			
// 		}
// 	},
// 	getters:{
// 		getUser(state){
// 			return state.LOGIN_USER;
// 		}
// 	},
// 	mutations: {
// 		updateUser(state , user){
// 			state.LOGIN_USER = user;
// 		}
// 	},
// 	actions: {
// 		asyncUpdateUser(context , user){
// 			context.commit('updateUser' , user);
// 		}
// 	},
// 	modules: {
		
// 	}
// })

export default new Vuex.Store({
	modules:{
		user
	}
});