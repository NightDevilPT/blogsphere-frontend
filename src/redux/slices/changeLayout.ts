import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface searchState {
	layout: boolean;
}

// Define the initial state using that type
const initialState: searchState = {
	layout: true,
};

export const changeLayoutSlice = createSlice({
	name: "changeLayout",
	initialState,
	reducers: {
		setChangeLayout: (state: any, action: PayloadAction<boolean>) => {
			state.layout = action.payload;
		}
	},
});

export const { setChangeLayout } = changeLayoutSlice.actions;
export default changeLayoutSlice.reducer;
