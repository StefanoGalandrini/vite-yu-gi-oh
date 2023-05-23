import {reactive} from "vue";
export const store = reactive({
	cardList: [],
	archetypes: [],
	baseUrl: "https://db.ygoprodeck.com/api/v7/",
});
