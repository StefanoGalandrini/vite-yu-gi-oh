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
	<div class="card">
		<img :src="source" alt="" />
		<p class="name">{{ name }}</p>
		<p class="archetype">{{ archetype }}</p>
	</div>
</template>

<style lang="scss" scoped>
$bgColor: #d48f38;

.card {
	background-color: $bgColor;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	flex-basis: calc((100% - 4 * 1.5rem) / 5);

	img {
		width: 100%;
		padding-bottom: 1rem;
	}

	.name {
		padding: 1rem;
		color: white;
		text-transform: uppercase;
		text-align: center;
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.archetype {
		font-size: 1.4rem;
		margin-bottom: 1.5rem;
	}
}
</style>
