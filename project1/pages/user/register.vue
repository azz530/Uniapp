<template>
	<view class="content">
		<view class="register">
			<view class="title">注册</view>
			<u-form class="registerForm" :model="userForm" :rules="userFormRules" ref="regForm">
				<u-form-item prop="username">
					<u-input v-model="userForm.username" placeholder="请输入用户名" />
				</u-form-item>
				<u-form-item prop="password">
					<u-input v-model="userForm.password" type="password" placeholder="请输入密码" />
				</u-form-item>
				<u-form-item prop="checkPsw">
					<u-input v-model="userForm.checkPsw" type="password" placeholder="再次输入密码" />
				</u-form-item>
			</u-form>
			<view class="btn">
				<button @click="register">注册</button>
			</view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userForm: {},
				userFormRules: {
					username: [{
						required: true,
						// 可以单个或者同时写两个触发验证方式 
						trigger: 'blur',
						asyncValidator: async (rule, value, callback) => {
							if (value === undefined || value === '') {
								return callback(new Error('请输入用户名'))
							} else {
								const {
									data: res
								} = await this.$api({
									url: 'api/nameValidator',
									method: 'POST',
									data: {
										username: value
									},
								})
								if (res.status !== 200) return callback(new Error('该用户名已被使用'))
								return callback();
							}
						}
					}, ],
					password: [{
						require: true,
						message: '请输入密码',
						trigger: 'blur',
						pattern: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[a-z])\S*$/,
						// 正则检验前先将值转为字符串
						transform(value) {
							return String(value);
						},
						message: '密码为六位字符,必须包含数字和字母'
					}],
					checkPsw: [{
						require: true,
						trigger: 'blur',
						validator: (rule, value, callback) => {
							if (value === '' || value === undefined) {
								return callback(new Error('请再次输入密码'))
							} else {
								value === this.userForm.password ? callback() : callback(new Error(
									'两次输入的密码不一致'))
							}

						}
					}, ],
				},
			};
		},
		methods: {
			register() {
				this.$refs.regForm.validate(async (valid) => {
					if (valid) {
						const {
							data: res
						} = await this.$api({
							url: 'api/register',
							method: 'POST',
							data: this.userForm,
						})
						if (res.status !== 200) return uni.showToast({
							title: '注册失败',
							icon: 'error'
						})
						this.$refs.uToast.show({
							title: '注册成功',
							type: 'success',
							position:'top',
							url: '/pages/user/login'
						})

					}
				})
			},
		},
		onReady() {
			this.$refs.regForm.setRules(this.userFormRules);
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;

		.register {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #fff;
			border-radius: 16rpx;
			box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.4);
			font-family: '楷体';

			.title {
				font-size: 60rpx;
				margin-top: 200rpx;
				font-weight: 600;
			}

			.registerForm {
				width: 80%;
			}

			.btn {
				margin-top: 60rpx;

				button {
					display: flex;
					width: 80vw;
					align-items: center;
					justify-content: center;
					border-radius: 30rpx;
					border: none;
					background-color: #a1ccff;
					color: #fff;
				}

				.tips {
					text-align: right;
					margin-top: 20rpx;
					display: flex;
					justify-content: space-between;

					.register {
						color: #72c2ff;
					}
				}
			}

		}
	}
</style>
