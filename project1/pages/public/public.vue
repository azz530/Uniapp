<template>
	<view class="content">
		<view class="top">
			<view class="back">
				<u-icon name="arrow-left" @click="back"></u-icon>
			</view>
			<view class="topBox">
				<p>草稿箱</p>
			</view>
		</view>
		<view class="articleForm">
			<u-form :model="ArticleForm" ref="articleForm" :border-bottom="false">
				<u-form-item>
					<u-input v-model="ArticleForm.title" placeholder="标题  ( 必填 )" />
				</u-form-item>
				<u-form-item :border-bottom="false">
					<u-input class="textContent" v-model="ArticleForm.content" type="textarea" placeholder="说些什么"
						:auto-height="true" maxlength="3000" :clearable="false" />
				</u-form-item>

				<u-form-item class="uploadPic" v-if="sureUpload" :border-bottom="false">
					<view class="pre-box">
						<view class="pre-item" v-for="(item, index) in lists" :key="index">
							<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
						</view>
						<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :auto-upload="false"
							@on-choose-complete="handleChange" action="#">
							<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<u-icon name="plus"></u-icon>
							</view>
						</u-upload>
					</view>

				</u-form-item>

				<u-form-item class="chose">
					<u-input v-model="ArticleForm.classify" type="select" placeholder="选择分类" @click="show = true" />
					<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback">
					</u-action-sheet>
				</u-form-item>
			</u-form>
			
			<view class="upload">
				<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :auto-upload="false"
					@on-choose-complete="handleChange" action="#">
					<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<u-icon name="photo" size="60" color="#c0c4cc"></u-icon>
					</view>
				</u-upload>
			</view>
			<view class="commitArticle">
				<button @click="submit" :class="hasContent?'hasContent':'noContent'" :disabled="hasContent">发表</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ArticleForm: {},
				show: false,
				actionSheetList: [
					{
						text: '科技'
					},
					{
						text: '政治'
					},
					{
						text: '娱乐'
					}
				],
				showUploadList: false,
				// 如果将某个ref的组件实例赋值给data中的变量，在小程序中会因为循环引用而报错
				// 这里直接获取内部的lists变量即可
				lists: [],
				sureUpload: false,
				hasContent:false,
			};
		},
		watch:{
			ArticleForm:{
				handler(newValue,oldValue){
					if(!newValue.title&&!newValue.content){
						this.hasContent = false;
					} else {
						this.hasContent = true;
					}
				},
				immediate:true,
				deep:true,
			}
		},
		methods: {
			back() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			actionSheetCallback(index) {
				this.ArticleForm.classify = this.actionSheetList[index].text;
			},
			handleChange(lists) {
				console.log(lists);
				this.sureUpload = true;
			},
			submit(){
			},
		},
		onLoad() {

		},
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.lists = this.$refs.uUpload.lists;
		}
	}
</script>

<style lang="scss">
	.content {
		.top {
			height: 100rpx;
			display: flex;
			align-items: center;
			background-color: #f4f4f4;

			.back {
				margin-left: 10rpx;
				font-size: 30rpx;
			}

			.topBox {
				height: 50rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				p {
					color: #444444;
					margin-right: 20rpx;
				}

				button {
					height: 40rpx;
					margin-right: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 2rpx solid #0f44b6;
					border-radius: 30rpx;
					background-color: #29a2ff;
					color: #fcfcfc;
					font-size: 16rpx;
				}
			}

		}

		.articleForm {
			.u-form {
				padding: 20rpx;
				position: relative;

				.chose {
					position: fixed;
					bottom: 190rpx;
					width: 95%;
				}

				.uploadPic {
					display: flex;
					flex-wrap: wrap;
					.pre-box {
						display: flex;
						flex-wrap: wrap;
						.pre-item {
							margin-right: 20rpx;
							margin-top: 20rpx;
							width: 215rpx;
							height: 215rpx;
							image {
								width: 100%;
								height: 100%;
							}
						}
					}
					.u-icon {
						margin-top: 20rpx;
						width: 210rpx;
						height: 210rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 40rpx;
						color: #acacac;
						background-color: #f5f4f4;
					}

				}

			}
		}

		.upload {
			position: fixed;
			bottom: 100rpx;
			padding: 20rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			width: 100%;
		}
		.commitArticle{
			position: fixed;
			bottom: 0rpx;
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.hasContent{
				width: 80%;
				height: 70%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 30rpx;
				background-color: #2181ff;
				color: #f5f5f5;
				font-family: '楷体';
				font-weight: 600;
			}
			.noContent{
				width: 80%;
				height: 70%;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 30rpx;
				background-color: rgba(38, 132, 255, 0.5);
				color: #f5f5f5;
				font-family: '楷体';
				font-weight: 600;
			}
		}
	}
</style>
