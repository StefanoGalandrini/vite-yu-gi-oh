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
	<!-- <div v-for="card in store.cardList" :key="card.id">
		{{ card.name }}
		{{ card.archetype }}
		{{ card.card_images[0].image_url_small }}
		<img :src="card.card_images[0].image_url_small" />
	</div> -->
	<div class="container">
		<AppCard
			v-for="card in store.cardList"
			:key="card.id"
			:name="card.name"
			:archetype="card.archetype"
			:source="card.card_images[0].image_url_small" />
	</div>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
}
</style>
