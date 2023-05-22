<script>
export default {
	data() {
		return {
			selected: "",
		};
	},
};
</script>

<template>
	<div class="container">
		<select v-model="selected" name="filter" id="filter">
			<option value="Alien">Alien</option>
			<option value="Altro">Altro</option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 15%;
	select {
		width: 100%;
		height: 3rem;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		margin: 1.5rem 10rem;
	}
}
</style>
