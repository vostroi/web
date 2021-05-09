<template>
	<div class="login-container">
		<div class="login-box">
			<el-form status-icon :model="Form" :rules="Rules" ref="Form">
				<el-form-item label="用户名" prop="username">
					<el-input type="text" v-model="Form.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="Form.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="login-box-btn" plain type="primary" size="medium" @click="submitForm('Form')">登 录</el-button>
					<el-button class="login-box-btn" plain @click="resetForm('Form')">重 置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				Form: {
					username: '',
					password: '',
				},
				// 表单使用校验规则
				Rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
					]
				}
			};
		},
		methods: {
			submitForm: function(formName) {
				this.$refs[formName].validate((valid) => {
					console.info(valid);
					if (valid) {
						this.saveUserInfo(this.Form);
						this.$router.push("/home");
					} else {
						return false;
					}
				});
			},
			resetForm: function(formName) {
				this.$refs[formName].resetFields();
			},
			saveUserInfo:function(userInfo){
				this.$store.dispatch('asyncUpdateUser' , userInfo);
				console.log("登录 保存到store.state",JSON.stringify(this.$store.state.user));
			}
		}
	}
</script>

<style scoped="">
	.login-container {
		width: 100%;
		text-align: center;
	}

	.login-box {
		width: 360px;
		margin: 150px auto;
		border: 1px solid #DCDFE6;
		border-radius: 8px;
		box-shadow: 0 0 30px #E4E7ED;
		padding: 20px;
	}
	.login-box-btn{
		width: 100px;
	}
</style>
