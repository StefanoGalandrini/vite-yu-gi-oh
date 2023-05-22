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
			store,
		};
	},

	components: {
		AppHeader,
		AppSearch,
		AppCardList,
		AppLoader,
	},

	created() {
		axios
			.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=2000&offset=0")
			.then((response) => {
				this.store.cardList = response.data.data;
				this.isLoading = false;
			});
	},
};
</script>

<template>
	<AppLoader v-if="isLoading" />

	<div class="container" v-else>
		<AppHeader />

		<main>
			<AppSearch />
			<AppCardList />
		</main>
	</div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
