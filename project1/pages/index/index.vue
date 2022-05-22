<template>
	<view class="content">
		<Header></Header>
		<view class="body">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="tabsChange" :bar-style="barStyle" active-color="#0f0f0f" inactive-color="#a3a6ad"></u-tabs>
		</view>
		
		<view class="mainContent">
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
				
			}
		},
		onPageScroll(e) {

		},
		onLoad() {}
	}
</script>

<style lang="scss">
	.content {
		.body{
			width: 300rpx;
			font-family: '楷体';
		}
	}
</style>
