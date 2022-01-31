<template>
	<div>
		Testing Slot
		<img style="max-width: 100%;height: 450px;" :src="getImageUrl(src)">
		<div class="bg-gray-400 p-4">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['img'],
		data() {
			return {
				src: this.img
			}
		},
		methods: {
			getImageUrl(img) {
				return require(`../assets/images/${img}`)
			}
		}
	}
</script>