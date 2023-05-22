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
	<div v-for="card in store.cardList" :key="card.id">
		{{ card.name }}
		{{ card.type }}
		{{ card.id }}
		<img src="{{ card.card_images.image_url_small }}" alt="" />
	</div>
	<div class="container">
		AppCardList

		<AppCard />
	</div>
</template>

<style lang="scss" scoped></style>
