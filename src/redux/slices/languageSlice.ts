import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface searchState {
	lang:string;
}

// Define the initial state using that type
const initialState: searchState = {
	lang:'english'
};

export const languageSlice = createSlice({
	name: "languageSlice",
	initialState,
	reducers: {
		setLanguage: (state: any, action: PayloadAction<string>) => {
			state.lang = action.payload;
		}
	},
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
