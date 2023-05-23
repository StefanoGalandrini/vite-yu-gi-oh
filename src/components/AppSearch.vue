<script>
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

	methods: {
		emitUpdateArchetype(event) {
			this.$emit("update", event.target.value);
		},
	},
};
</script>

<template>
	<div class="container">
		<select :value="selectedArchetype" @change="emitUpdateArchetype">
			<option value="">Seleziona Archetipo</option>
			<option
				v-for="archetype in store.archetypes"
				:key="archetype"
				:value="archetype">
				{{ archetype }}
			</option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 70%;
	margin-inline: auto;
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 1.5rem;
	gap: 1rem;

	select {
		width: 40%;
		height: 3rem;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		margin: 1.25rem 0;
	}
}
</style>
