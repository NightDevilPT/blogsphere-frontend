import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import profileSlice from "./slices/profileSlice";

const store = configureStore({
	reducer: {
		theme: themeSlice,
		profile:profileSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
