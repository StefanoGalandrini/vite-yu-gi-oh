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
			// booleans for AppLoader
			isLoadingCards: true,
			isLoadingArch: true,
			selectedArchetype: "",
			requestString: "",
			store,
		};
	},

	methods: {
		// loads cards from API
		requestDataFromApi() {
			this.isLoadingCards = true;

			this.selectedArchetype === ""
				? (this.requestString = `${store.baseUrl}cardinfo.php?num=800&offset=0"`)
				: (this.requestString = `${store.baseUrl}cardinfo.php?archetype=${this.selectedArchetype}`);

			axios.get(`${this.requestString}`).then((response) => {
				this.store.cardList = response.data.data;
				this.isLoadingCards = false;
			});
		},

		requestArchetypes() {
			// loads all archetypes from API
			this.isLoadingArch = true;
			this.store.archetypes.length = 0;
			const tempArray = [];
			axios.get(store.baseUrl + "archetypes.php").then((response) => {
				this.tempArray = response.data;
				this.tempArray.forEach((element) => {
					this.store.archetypes.push(element.archetype_name);
				});
			});
			this.isLoadingArch = false;
		},

		// receives value from option select and changes Archetype
		updateSelectedArchetype(value) {
			this.selectedArchetype = value;
			this.requestDataFromApi();
		},

		// receives click from AppSearch button and resets Archetype
		resetInputArchetype() {
			this.selectedArchetype = "";
			this.requestDataFromApi();
		},
	},

	components: {
		AppLoader,
		AppHeader,
		AppSearch,
		AppCardList,
	},

	created() {
		// create initial array for cards and for archetypes
		this.requestDataFromApi();
		this.requestArchetypes();
	},
};
</script>

<template>
	<!-- AppLoader shown only when loading from API -->
	<AppLoader v-if="isLoadingCards || isLoadingArch" />

	<!-- When everything is loaded, components in "container" are visible -->
	<div v-else class="container">
		<AppHeader />

		<main>
			<!-- @update is the event from AppSearch emit -->
			<!-- @reset is the event from Reset Button emit -->
			<AppSearch
				:selectedArchetype="selectedArchetype"
				@update="updateSelectedArchetype"
				@reset="resetInputArchetype" />

			<!-- shows cards based on selected Archetype -->
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
