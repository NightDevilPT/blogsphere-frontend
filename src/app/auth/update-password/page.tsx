"use client";

import React, { useEffect, useState } from "react";
import ShowNotification from "@/components/ShowNotification";
import InputComponent from "@/components/FormComponent/InputComponent";
import { Request } from "@/services/Request";
import { useRouter, useSearchParams } from "next/navigation";

const index = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const params = useSearchParams()
	const token = params.get("token")
	const registerNewUser = async (formData: { password: string }) => {
		console.log(formData);
		try{
			setLoading(true);
			const res = await Request(`/user/update-password?token=${token}`,'PUT',{password:formData.password})
			ShowNotification(res.data);
			setLoading(false)
			if(res.name!=="AxiosError"){
				router.push('/auth/login')
			}
		}catch(err){
			setLoading(false)
		}
	};

	return (
		<div
			className={`w-full h-full flex justify-center items-center z-10 relative overflow-hidden`}
		>
			<div
				className={`container w-96 h-auto p-5 rounded bg-slate-950 flex justify-start items-center flex-col`}
			>
				<h1
					className={`w-full h-auto text-slate-300 font-bold text-2xl pb-5`}
				>
					Update Password
				</h1>
				<form
					className={`w-full h-auto flex justify-start items-start gap-4 text-slate-300 flex-col`}
					onSubmit={(event: any) => {
						event.preventDefault();
						registerNewUser({
							password: event.target.password.value,
						});
					}}
				>
					<InputComponent
						label="password"
						required={true}
						type="password"
						background="bg-slate-900"
					/>

					<button
						type="submit"
						className={`w-full h-10 bg-slate-200 text-slate-950 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						Update Password{" "}
						{loading && (
							<span
								className={`w-5 h-5 border-2 rounded-full border-slate-300 border-t-slate-800 animate-spin`}
							/>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default index;
