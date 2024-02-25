import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface searchState {
	showSearch: boolean;
	showSetting:boolean;
}

// Define the initial state using that type
const initialState: searchState = {
	showSearch: false,
	showSetting:false
};

export const showSearchSlice = createSlice({
	name: "showSearch",
	initialState,
	reducers: {
		setShowSearch: (state: any, action: PayloadAction<boolean>) => {
			state.showSearch = action.payload;
		},
		setShowSetting: (state: any, action: PayloadAction<boolean>) => {
			state.showSetting = action.payload;
		}
	},
});

export const { setShowSearch,setShowSetting } = showSearchSlice.actions;
export default showSearchSlice.reducer;
