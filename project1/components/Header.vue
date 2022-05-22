<template>
	<view class="content">
		<view class="top">
			<view class="left">
				<u-search placeholder="输入内容进行搜索" v-model="searchValue" :show-action="false" @search="searchSth"></u-search>
			</view>
			<view class="right">
				<image src="../static/img/banner.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				searchValue:''
			};
		},
		methods:{
			searchSth(value){
				console.log(value);
			}
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100rpx;
		.top {
			display: flex;
			align-items: center;
			height: 100%;
			.left {
				margin-left: 30rpx;
				width: 80%;
			}

			.right {
				margin-left: 30rpx;
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}
	}
</style>
