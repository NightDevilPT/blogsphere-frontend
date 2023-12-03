import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface themeState {
	theme: "light" | "dark";
}

// Define the initial state using that type
const initialState: themeState = {
	theme: "light",
};

export const themeSlicer = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state: any, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlicer.actions;
export default themeSlicer.reducer;
