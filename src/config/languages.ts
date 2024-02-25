import english from "../dictionary/en.json";
import french from "../dictionary/fr.json";

export const languages:any = {
	en:import("../dictionary/en.json").then((res)=>res),
	fr:import("../dictionary/fr.json").then((res)=>res)
}