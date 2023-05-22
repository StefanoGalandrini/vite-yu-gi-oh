<script>
import AppCardList from "./components/AppCardList.vue";
import AppHeader from "./components/AppHeader.vue";
import AppResult from "./components/AppResult.vue";
import AppSearch from "./components/AppSearch.vue";
import axios from "axios";
import {store} from "./store";
export default {
	data() {
		return {
			cardList: [],
			store,
		};
	},

	components: {
		AppHeader,
		AppSearch,
		AppResult,
		AppCardList,
	},

	created() {
		axios
			.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0")
			.then((response) => (this.store.cardList = response.data.data));
	},
};
</script>

<template>
	<AppHeader />

	<main>
		<AppSearch />

		<AppResult />

		<AppCardList />
	</main>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
