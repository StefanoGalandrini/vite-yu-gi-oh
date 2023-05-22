<script>
import AppCard from "./AppCard.vue";
import {store} from "../store";
export default {
	data() {
		return {
			store,
		};
	},

	components: {AppCard},
};
</script>

<template>
	<div class="container">
		<AppCard
			v-for="card in store.cardList"
			:key="card.id"
			:name="card.name"
			:source="card.card_images[0].image_url_small"
			:archetype="card.archetype ? card.archetype : ''" />
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 80vw;
	margin-inline: auto;
	display: flex;
	flex-wrap: wrap;
	column-gap: 1.5rem;
}
</style>
