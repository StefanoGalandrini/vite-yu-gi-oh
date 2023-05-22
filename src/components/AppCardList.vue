<script>
import AppResult from "./AppResult.vue";
import AppCard from "./AppCard.vue";
import {store} from "../store";
export default {
	data() {
		return {
			store,
		};
	},

	components: {
		AppCard,
		AppResult,
	},
};
</script>

<template>
	<div class="container">
		<AppResult :totalCards="store.cardList.length" />

		<AppCard
			v-for="card in store.cardList"
			:key="card.id"
			:name="card.name"
			:source="card.card_images[0].image_url"
			:archetype="card.archetype ? card.archetype : ''" />
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-color: white;
	width: 80vw;
	margin-inline: auto;
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	padding: 3rem 3rem;
}
</style>
