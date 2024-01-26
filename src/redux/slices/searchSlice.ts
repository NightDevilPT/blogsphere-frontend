import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface searchState {
	show: boolean;
}

// Define the initial state using that type
const initialState: searchState = {
	show: false,
};

export const showSearchSlice = createSlice({
	name: "showSearch",
	initialState,
	reducers: {
		setShowSearch: (state: any, action: PayloadAction<boolean>) => {
			state.show = action.payload;
		}
	},
});

export const { setShowSearch } = showSearchSlice.actions;
export default showSearchSlice.reducer;
