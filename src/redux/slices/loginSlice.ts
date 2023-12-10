import apiService, { Request } from "@/services/Request";
import { HttpMethod, SignupType } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IProps {
	data:any,
	loading:boolean,
	error:string|null
}
const initialState:IProps={
	data:null,
	loading:false,
	error:null
}

export const signupUser = createAsyncThunk('auth/signupUser', async (userData: SignupType, { rejectWithValue }) => {
	try {
	  const response:any = await Request('/user/create',HttpMethod.POST,userData); // Adjust the endpoint based on your API
	  return response;
	} catch (error) {
	  return rejectWithValue(error);
	}
  });