import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface color {
	primaryBG: string;
	secondaryBG: string;
	primaryFG: string;
	secondaryFG: string;
	divider: string;
	hoverBG:string;
	hoverFG:string
}

interface themeState {
	theme: "light" | "dark";
	color: color;
}

// Define the initial state using that type
const initialState: themeState = {
	theme: "dark",
	color: {
		primaryBG: "",
		secondaryBG: "",
		primaryFG: "",
		secondaryFG: "",
		divider: "",
		hoverBG:"",
		hoverFG:""
	},
};

export const themeSlicer = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state: any, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
		setThemeColor: (state: any, action: PayloadAction<color>) => {
			state.color = action.payload;
		},
	},
});

export const { setTheme,setThemeColor } = themeSlicer.actions;
export default themeSlicer.reducer;
