import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import profileSlice from "./slices/profileSlice";
import searchSlice from "./slices/searchSlice";
import changeLayoutSlice from "./slices/changeLayout";

const store = configureStore({
	reducer: {
		theme: themeSlice,
		profile:profileSlice,
		showSearch:searchSlice,
		layout:changeLayoutSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
