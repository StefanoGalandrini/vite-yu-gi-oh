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

	props: {
		selectedArchetype: {
			type: String,
			required: true,
		},
	},

	components: {
		AppCard,
		AppResult,
	},

	computed: {
		filteredCards() {
			if (this.selectedArchetype === "") {
				return store.cardList;
			} else {
				return store.cardList.filter(
					(card) => card.archetype === this.selectedArchetype,
				);
			}
		},
	},
};
</script>

<template>
	<div class="container">
		<AppResult :totalCards="filteredCards.length" />

		<AppCard
			v-for="card in filteredCards"
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
	height: min-content;
	margin-inline: auto;
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	padding: 3rem 3rem;
}
</style>
