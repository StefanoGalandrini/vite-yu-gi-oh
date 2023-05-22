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
		<p v-if="archetype != undefined">{{ archetype }}</p>
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-basis: calc((100% - 4 * 1.5rem) / 5);
}
</style>
