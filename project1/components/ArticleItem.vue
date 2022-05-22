<template>
	<view class="content">
		<view class="goods">
			<view class="goodsPic">

			</view>
			<view class="info">
				<view class="infoMsg">
					<view class="Msg">
						<view class="msg1">
							草莓蛋糕
						</view>
						<view class="msg2">
							介绍
						</view>
					</view>
					<view class="cartBtn">
						<i class="iconfont icon-gouwuche"></i>
					</view>
				</view>
				<view class="prices">
					<text>￥</text>
					298.32
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cakeItem",
		props: {
			GoodsInfo: {
				type: Object,
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-wrap: wrap;
		padding: 15rpx;
		justify-content: space-between;

		.goods {
			width: 350rpx;

			.goodsPic {
				height: 350rpx;
				background-color: red;
			}

			.info {

				.infoMsg {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.Msg {
						.msg1 {
							font-size: 32rpx;
							margin-top: 12rpx;
						}

						.msg2 {
							font-size: 24rpx;
							margin-top: 7rpx;
						}
					}
					.cartBtn{
						margin-right: 20rpx;
						width: 60rpx;
						height: 60rpx;
						background-color: #ffe32a;
						border-radius: 50%;
						text-align: center;
						line-height: 60rpx;
						i{
							font-size: 32rpx;
						}
					}


				}

				.prices {
					font-size: 24rpx;
					margin: 11rpx 0;
				}
			}
		}
	}
</style>
