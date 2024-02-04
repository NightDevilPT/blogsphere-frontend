// slices/dataSlice.ts
import apiService from "@/services/Request";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface DataState {
	data: any;
	loading: boolean;
	error: string | null;
}

// Initial state
const initialState: DataState = {
	data: null,
	loading: false,
	error: null,
};

// Create an async thunk with a parameter
const fetchProfileData = createAsyncThunk(
	"profileSlice",
	async (_, { rejectWithValue }) => {
		try {
			const tokenData = window.localStorage.getItem("token");
			if (!tokenData) return null;
			const data = await apiService.get(`/user/get-profile`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem(
						"authToken"
					)}`,
				},
			});
			return data.data.data;
		} catch (error) {
			return rejectWithValue("Error fetching data");
		}
	}
);

// Create a slice
const profileSlice = createSlice({
	name: "profileSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(
			fetchProfileData.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.data = action.payload;
				state.error = "success";
			}
		);

		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.loading = false;
			state.error = "rejected";
		});
	},
});

// Export the async thunk function for use in components or other slices
export { fetchProfileData };

// Export the reducer to be used in the Redux store
export default profileSlice.reducer;
