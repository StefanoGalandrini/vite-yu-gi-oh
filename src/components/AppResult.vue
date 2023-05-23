<script>
export default {
	props: {
		totalCards: {
			type: Number,
			required: true,
		},
	},
};
</script>

<template>
	<div class="results">
		<p class="text">Found {{ totalCards }} cards</p>
	</div>
</template>

<style lang="scss" scoped>
$bgdark: #212529;
.results {
	width: 100%;
	background-color: $bgdark;
	margin-bottom: -1.5rem;
	height: 8vh;
	display: flex;
	align-items: center;
	padding: 0;
	z-index: 5;

	.text {
		color: white;
		padding: 0 1.5rem;
		font-size: 1.5rem;
		font-weight: bold;
	}
}
</style>
