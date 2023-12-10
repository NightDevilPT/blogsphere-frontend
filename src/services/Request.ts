import { env } from "@/config/env";
import { ForgetType, LoginType, SignupType } from "@/types/types";
import axios, { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-toastify";

type DataType = SignupType | LoginType | ForgetType;
const status: number[] = [200, 201];
const error: number[] = [403, 401, 404, 500];
type methods = "POST"|"PUT"|"GET"|"DELETE"

const apiService: AxiosInstance = axios.create({
	baseURL: env.BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const Request = async (url: string,method:methods, data?: DataType) => {
	try {
		const response = await apiService({
      method,
      data,
      url
    });
		if (response.status === 200 || response.status === 201) {
			toast.success(response.data.message, {
				theme: "colored",
			});
			return { status: true, data: response.data.message };
		}
	} catch (err: any) {
		if (err.response.status === 403) {
			toast.info(err.response.data.message, {
				theme: "colored",
			});
		}else if (err.response.status === 404) {
      toast.info("User not exist with this mail", {
        theme: "colored",
      });
    } else {
			toast.error(err.response.data.message, {
				theme: "colored",
			});
		}
		return { status: false, data: null };
	}
};

export default apiService;
