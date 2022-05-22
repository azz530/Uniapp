<template>
	<view>
		<view class="box">
			<view class="left">
				<i class="iconfont icon-canju"></i>
				<view class="midText">
					{{midText}}
					<view>{{midTextEn}}</view>
				</view>
			</view>
			<view class="rightText">
				{{rightText}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ActiveModel",
		props:{
			midText:{
				type:String,
			},
			midTextEn:{
				type:String,
			},
			rightText:{
				type:String,
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.box{
	padding: 20rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left{
		display: flex;
		align-items: center;
		i{
			font-size: 50rpx;
			
		}
		.midText{
			margin-left: 100rpx;
			font-size: 28rpx;
			font-weight: 500;
		}
	}

	.rightText{
		font-size: 28rpx;
	}
}
</style>