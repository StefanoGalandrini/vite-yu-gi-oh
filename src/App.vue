<script>
import AppCardList from "./components/AppCardList.vue";
import AppHeader from "./components/AppHeader.vue";
import AppResult from "./components/AppResult.vue";
import AppSearch from "./components/AppSearch.vue";
export default {
	components: {
		AppHeader,
		AppSearch,
		AppResult,
		AppCardList,
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
