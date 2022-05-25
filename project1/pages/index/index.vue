<template>
	<view class="content">
		<Header></Header>
		<view class="body">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="tabsChange" :bar-style="barStyle" active-color="#0f0f0f" inactive-color="#a3a6ad"></u-tabs>
		</view>
		
		<view class="mainContent" @click="to">
			<ArticleItem></ArticleItem>
		</view>
		
		<view class="public">
			<u-icon name="edit-pen" color="#efefef" size="40" @click="toPublic"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '喜欢'
				}, {
					name: '热门',
				}],
				current: 0,
				barStyle:{backgroundColor:'#0772ff',height:'5rpx'},
			};
		},
		methods: {	
			tabsChange(index){
				this.current = index;
				
			},
			to(){
				uni.navigateTo({
					url:'../details/details'
				})
			},
			getAllAticle(){
				this.$api({
					url:'my/getAllAticle',
					method:'POST',
					data:{}
				})
			},
			toPublic(){
				uni.navigateTo({
					url:'../public/public'
				})
			},
		},
		onPageScroll(e) {

		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	.content {
		.body{
			width: 300rpx;
			font-family: '楷体';
		}
		.mainContent{
			min-height: 40vh;
		}
		.public{
			position: fixed;
			bottom: 120rpx;
			right: 50rpx;
			height: 100rpx;
			width: 100rpx;
			border-radius: 50%;
			background-color: #196de2;
			display:flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.5);
		}
	}
</style>
