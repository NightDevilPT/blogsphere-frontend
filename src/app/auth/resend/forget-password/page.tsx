"use client";

import React, { useEffect, useState } from "react";
import ShowNotification from "@/components/ShowNotification";
import InputComponent from "@/components/FormComponent/InputComponent";
import { Request } from "@/services/Request";
import { useRouter } from "next/navigation";

const index = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const registerNewUser = async (formData: { email: string }) => {
		console.log(formData);
		setLoading(true);
		try{
			const res = await Request(`/user/send-link?email=${formData.email}&linkType=forgetPassword`,'PUT')
			ShowNotification(res.data);
		}catch(err){
			console.log(err);
		}
		setLoading(false)
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
					Forget Password
				</h1>
				<form
					className={`w-full h-auto flex justify-start items-start gap-4 text-slate-300 flex-col`}
					onSubmit={(event: any) => {
						event.preventDefault();
						registerNewUser({
							email: event.target.email.value,
						});
					}}
				>
					<InputComponent
						label="email"
						required={true}
						type="email"
						background="bg-slate-900"
					/>

					<button
						type="submit"
						className={`w-full h-10 bg-slate-200 text-slate-950 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						Send Link{" "}
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
