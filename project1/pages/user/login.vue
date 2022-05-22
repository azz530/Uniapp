<template>
	<view class="content">
		<view class="loginForm">
			<view class="title">登录</view>
			<input class="username" type="text" placeholder="请输入用户名" v-model="userForm.username">
			<input class="password" type="password" placeholder="请输入密码" v-model="userForm.password">

			<view class="btn">
				<button @click="login">登录</button>
				<view class="tips">
					<view class="register" @click="toRegister">
						去注册
					</view>
					<view class="forget" @click="toChangePsw">
						忘记密码?
					</view>

				</view>
			</view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import jwtDecode from 'jwt-decode'
	export default {
		data() {
			return {
				userForm: {},
			};
		},
		methods: {
			async login() {
				if (this.userForm.username && this.userForm.password) {
					const {
						data: res
					} = await this.$api({
						url: 'api/login',
						method: 'POST',
						data: this.userForm,
					})
					if (res.status!==200) {
						this.$refs.uToast.show({
							title: '登录失败',
							type: 'error',
						})
					} else {
						//登录成功跳转首页
						this.$refs.uToast.show({
							title: '登录成功',
							type: 'success',
							position:'top',
							url:'/pages/index/index',
							isTab:true,
						})
						uni.setStorageSync('token',res.token)//将token存储到缓存当中
						const user = jwtDecode(res.token)
						this.$store.commit('setToken',res.token)
						this.$store.commit('setUser',user)
					}
				}
			},
			toRegister() {
				uni.navigateTo({
					url: './register'
				})
			},
			toChangePsw() {
				uni.navigateTo({
					url: './changePsw'
				})
			},
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

		.loginForm {
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

			.username {
				border-bottom: 1rpx solid #9c9899;
				width: 80%;
				margin-top: 100rpx;
			}

			.password {
				border-bottom: 1rpx solid #9c9899;
				width: 80%;
				margin-top: 80rpx;
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
