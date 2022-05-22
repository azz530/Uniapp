<template>
	<view class="content">
		<view class="topBg">
			<view class="user">
				<view class="username">{{userInfo.username}}</view>
				<view class="avatar">
					<u-upload :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<u-avatar style="width: 150rpx;height: 150rpx;" src="../../static/img/banner.jpg"></u-avatar>
						</view>
					</u-upload>
				</view>
			</view>
		</view>
		<view class="tab">
			图标行
		</view>
		<view class="setup">
			<view class="setupItem" v-for="item in 6">
				<view class="tips">
					设置内容
				</view>
				<view class="rightrow">
					>
				</view>
			</view>
		</view>
		<button class="logout" @click="logout">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				setupList: [{
					id: 1,
					name: '用户须知',
					path: '/pages'
				}, ],
				userInfo:{},
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			};
		},
		methods: {
			async getUserInfo() {
				const {
					data: res
				} = await this.$api({
					url: 'my/getUserInfo',
					method: 'GET',
					data: {
						uid: this.$store.state.user.userInfo.uid
					},
				})
				if(res.status === 200){
					this.userInfo = res.data;
				}
			},
			logout(){
				uni.navigateTo({
					url:'./login'
				})
			},
		},
		onLoad() {
			this.getUserInfo()
		}
	}
</script>

<style lang="scss">
	.content {
		.topBg {
			height: 400rpx;
			background-color: #06a0ff;
			position: relative;
			border-radius: 0rpx 0rpx 20rpx 20rpx;
			.user {
				position: absolute;
				right: 0rpx;
				top: 80rpx;
				height: 200rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.username {
					font-size: 40rpx;
					margin-left: 70rpx;
					font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
					font-weight: 500;
				}

				.avatar {
					margin-right: 60rpx;
				}
			}

		}

		.tab {
			width: 600rpx;
			height: 120rpx;
			margin: 0 auto;
			background-color: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.3);
			border-radius: 10rpx;
			position: relative;
			top: -60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.setup {
			.setupItem {
				height: 90rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #cacaca;

				.tips {
					margin-left: 30rpx;
					color: #3b3b3b;
				}

				.rightrow {
					margin-right: 20rpx;
				}
			}
		}

		.logout {
			margin-top: 50rpx;
			width: 80%;
			height: 80rpx;
			background-color: #ff674c;
			color: #f3f3f3;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
