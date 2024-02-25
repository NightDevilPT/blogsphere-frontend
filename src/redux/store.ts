import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import profileSlice from "./slices/profileSlice";
import dialogSlice from "./slices/dialogSlice";
import changeLayoutSlice from "./slices/changeLayout";
import signupSlice from "./slices/signupSlice";
import languageSlice from "./slices/languageSlice";

const store = configureStore({
	reducer: {
		theme: themeSlice,
		profile:profileSlice,
		dialog:dialogSlice,
		layout:changeLayoutSlice,
		signup:signupSlice,
		language:languageSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
