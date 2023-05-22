<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		archetype: {
			type: String,
			required: true,
		},
		source: {
			type: String,
			required: true,
		},
	},
};
</script>

<template>
	<div class="container">
		<img :src="source" alt="" />
		<p>{{ name }}</p>
		<p>{{ archetype }}</p>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: calc((100% - 4 * 1.5rem) / 5);
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
}
</style>
