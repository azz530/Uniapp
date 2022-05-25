<template>
	<view class="content">
		<view class="articleBox" v-for="item in 8">
			<view class="top">
				<view class="author">
					<view class="authorAvatar">
						<u-avatar style="width: 60rpx;height: 60rpx;" src="../static/img/banner.jpg"></u-avatar>
					</view>
					<view class="message">
						<view class="authorName">作者名字</view>
						<view class="time">05-21</view>
					</view>
				</view>
				<view class="btn">
					<button class="add">关注</button>
					<u-icon name="more-dot-fill"></u-icon>
				</view>
			</view>
			<view class="articleContent">
				<view class="details">
					hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
				</view>
				<view class="pic">
					<image src="../static/img/banner.jpg" mode=""></image>
				</view>
			</view>
			<view class="tipsList">
				<view class="tag">
					<u-tag text="雪月夜" type="info" />
				</view>
				<view class="btnList">
					<view class="btnItem">
						<i class="iconfont icon-yanjing"></i>
						<view class="num">100</view> 
					</view>
					<view class="btnItem">
						<i class="iconfont icon-pinglun"></i>
						<view class="num">100</view> 
					</view>
					<view class="btnItem">
						<i class="iconfont icon-dianzan"></i>
						<view class="num">100</view> 
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "cakeItem",
		props: {
			ArticleInfo: {
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
		.articleBox{
			width: 100%;
			.top{
				height: 5vh;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				.author{
					display: flex;
					align-items: center;
					.message{
						display: flex;
						flex-direction: column;
						align-items: left;
						margin-left: 10rpx;
						font-size: 16rpx;
						.time{
							color: #bababa;
						}
					}
				}
				.btn{
					display: flex;
					.add{
						height: 40rpx;
						width: 120rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						border: 2rpx solid #2c92ff;
						color: #2c92ff;
						background-color: #fff;
						font-size: 16rpx;
						margin-right: 20rpx;
					}
					.u-icon{
						margin-right: 15rpx;
					}
				}
			}
			.articleContent{
				margin-top: 20rpx;
				max-height: 300rpx;
				min-height: 400rpx;
				.details{
					height: 80rpx;
					word-break: break-all;
					text-overflow:ellipsis;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					overflow:hidden;
				}
				.pic{
					display:inline-block;
					height: 300rpx;
					width: 100%;
					margin-top: 20rpx;
					border-radius: 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 30rpx;
					}
				}
			}
			.tipsList{
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				.btnList{
					display: flex;
					align-items: center;
					.btnItem{
						display: flex;
						align-items: center;
						margin: 0 10rpx;
						.num{
							color: #bababa;
						}
					}
				}
			}
		}
	}
</style>
