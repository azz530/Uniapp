<template>
	<view class="content">
		<view class="editContent">
			<view class="avatar">
				<u-upload :custom-btn="true">
					<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<u-avatar style="width: 150rpx;height: 150rpx;" src="../../static/img/banner.jpg"></u-avatar>
						<view class="tips">点击修改头像</view>
					</view>
				</u-upload>
			</view>
			<view class="editForm">
				<u-form :model="userForm" ref="userForm" :border-bottom="false" label-width="150">
					<u-form-item label="昵称:">
						<u-input v-model="userForm.username" placeholder="用户名" :disabled="true" />
					</u-form-item>
					<u-form-item label="性别:" prop="sex">
						<u-input v-model="userForm.sex" type="select" placeholder="性别" @click="show = true" />
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback">
						</u-action-sheet>
					</u-form-item>
					<u-form-item label="个性签名:" prop="sign">
						<u-input v-model="userForm.sign" placeholder="个性签名(30字)" maxlength="30" />
					</u-form-item>
				</u-form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userForm: {},
				actionSheetList: [{
						text: '男',
					},
					{
						text: '女',
					}
				],
				show: false,
				hasChange: false,
			};
		},
		methods: {
			actionSheetCallback(index) {
				this.userForm.sex = this.actionSheetList[index].text;
			},
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
				if (res.status === 200) {
					this.userForm = res.data;
				}
			},
			onBackPress(e) {
				if (e.from === 'backbutton') {
					
				}
			},
		},
		onLoad() {
			this.getUserInfo()
		},
		onReady() {
			this.$refs.userForm.setRules(this.userFormRules);
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100vh;
		background-color: #f8f8f8;

		.editContent {
			background-color: #fff;

			.avatar {
				width: 100%;
				padding-top: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.tips {
					color: #b1b1b1;
				}
			}

			.editForm {
				padding: 0rpx 20rpx;
			}
		}

	}
</style>
