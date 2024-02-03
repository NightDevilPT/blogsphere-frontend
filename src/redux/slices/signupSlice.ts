// signupSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Request } from "@/services/Request";
import { HttpMethod, SignupType } from "@/types/types";

interface IProps {
  data: any;
  loading: boolean;
  error: any;
}

const initialState: IProps = {
  data: null,
  loading: false,
  error: null,
};

export const signupUserThunk = createAsyncThunk(
  "auth/signupUser",
  async (userData: SignupType, { rejectWithValue }) => {
    try {
      const response: any = await Request(
        "/user/create",
        HttpMethod.POST,
        userData
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signupSlice",
  initialState,
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder.addCase(signupUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUserThunk.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      if(action.payload.data){
        state.data = action.payload.data;
      }else{
        state.data = null
        state.error = action.payload.response.data
      }
    });
    builder.addCase(signupUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
	    state.data = action
    });
  },
});

export default signupSlice.reducer;
export const { /* any additional reducers */ } = signupSlice.actions;
