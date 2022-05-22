<template>
	<view>
		详情页
		<button type="default" @click="back">返回</button>
		<button type="default" @click="toUserInfo">个人中心</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(options){
		},
		methods:{
			back(){
				uni.navigateBack({//返回上一页
					delta:1
				})
			},
			toUserInfo(){
				uni.switchTab({//底部菜单页跳转
					url:'../user/user'
				})
			},
		},
	}
</script>

<style lang="scss">

</style>
