<script>
import AppCardList from "./components/AppCardList.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import AppLoader from "./components/AppLoader.vue";
import axios from "axios";
import {store} from "./store";

export default {
	data() {
		return {
			isLoadingCards: true,
			isLoadingArch: true,
			cardList: [],
			selectedArchetype: "",
			store,
		};
	},

	methods: {
		requestDataFromApi() {
			this.isLoadingCards = true;
			axios
				.get(`${store.baseUrl}cardinfo.php?num=1500&offset=0`)
				.then((response) => {
					this.store.cardList = response.data.data;
					this.isLoadingCards = false;
				});
		},

		requestArchetypes() {
			this.isLoadingArch = true;
			this.store.archetypes.length = 0;
			axios.get(store.baseUrl + "archetypes.php").then((response) => {
				const data = response.data;
				for (let i = 0; i < 350; i++) {
					store.archetypes.push(data[i].archetype_name);
				}
			});
			this.isLoadingArch = false;
		},

		updateSelectedArchetype(value) {
			this.selectedArchetype = value;
		},
	},

	components: {
		AppLoader,
		AppHeader,
		AppSearch,
		AppCardList,
	},

	created() {
		// creates an array for cards and another for archetypes
		this.requestDataFromApi();
		this.requestArchetypes();
	},
};
</script>

<template>
	<div>{{ isLoadingCards }} {{ isLoadingArch }}</div>
	<AppLoader v-if="isLoadingCards || isLoadingArch" />

	<div v-else class="container">
		<AppHeader />

		<main>
			<AppSearch
				:selectedArchetype="selectedArchetype"
				@update="updateSelectedArchetype" />

			<AppCardList :selectedArchetype="selectedArchetype" />
		</main>
	</div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;

html {
	overflow: auto;
}
</style>
