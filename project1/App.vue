<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {},
		created() {
			if (uni.getStorageSync("state")) {
				this.$store.replaceState(
					Object.assign({},
						this.$store.state,
						JSON.parse(uni.getStorageSync("state"))
					)
				);
				uni.removeStorageSync("state");
			}
			window.addEventListener("beforeunload", () => {
				uni.setStorageSync("state", JSON.stringify(this.$store.state));
			});
		}
	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';
	/*每个页面公共css */
</style>
