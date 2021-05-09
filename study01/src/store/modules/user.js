const user = {
	state: sessionStorage.getItem('STATE_DATA') ? JSON.parse(sessionStorage.getItem('STATE_DATA')) : {
		LOGIN_USER: {

		}
	},

	// 监听state对象数据的最新状态（计算属性）
	getters: {
		getUser(state) {
			return state.LOGIN_USER;
		}
	},

	// 唯一的可以修改state对象数据的方法（同步，阻塞的）
	mutations: {
		updateUser(state, user) {
			state.LOGIN_USER = user;
		}
	},

	// 异步执行mutations中的方法
	actions: {
		asyncUpdateUser(context, user) {
			context.commit('updateUser', user);
		}
	}
}

export default user;
