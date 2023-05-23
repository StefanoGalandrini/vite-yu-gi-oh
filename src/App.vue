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
			isLoading: true,
			cardList: [],
			selectedArchetype: "",
			store,
		};
	},

	methods: {
		requestDataFromApi() {
			isLoading: true;
			axios
				.get(`${store.baseUrl}cardinfo.php?num=1500&offset=0`)
				.then((response) => {
					this.store.cardList = response.data.data;
					this.isLoading = false;
				});
		},

		requestArchetypes() {
			isLoading: true;
			this.store.archetypes.length = 0;
			axios.get(store.baseUrl + "archetypes.php").then((response) => {
				const data = response.data;
				console.log(data);
				for (let i = 0; i < 150; i++) {
					console.log(data[i]);
					store.archetypes.push(data[i].archetype_name);
				}
			});
			this.isLoading = false;
		},

		updateSelectedArchetype(value) {
			this.selectedArchetype = value;
		},
	},

	components: {
		AppHeader,
		AppSearch,
		AppCardList,
		AppLoader,
	},

	created() {
		// creates an array for cards and another for archetypes
		this.requestDataFromApi();
		this.requestArchetypes();
	},
};
</script>

<template>
	<AppLoader v-if="isLoading" />

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
</style>
