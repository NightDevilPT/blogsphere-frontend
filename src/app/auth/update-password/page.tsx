"use client";

import { env } from "@/config/env";
import { RootState } from "@/redux/store";
import banner from "../../../assets/form.png";
import CustomInput from "@/components/Inputs";
import LoadingFrame from "@/components/loader/LoadingFrame";

import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
	const [formState, setFormState] = useState<{ password: string }>({
		password: "",
	});
	const [upload, setUpload] = useState<boolean>(false);
	const theme = useSelector((state: RootState) => state.theme);
	const router = useRouter();
	const params = useSearchParams();

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const token = params.get("token");

		if(!token){
			toast.info("Invalid Token...", {
				theme: "colored",
			});
			return
		}

		if (formState.password === "") {
			toast.info("Email required...", {
				theme: "colored",
			});
			return;
		}
		setUpload(true);
		const form = new FormData();
		form.append("password", formState.password);
		try {
			const response = await axios.put(
				`${env.BACKEND_URL}/user/update-password?token=${token}`,
				form,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.status === 200) {
				toast.success(response.data.message, {
					theme: "colored",
				});
				router.push('/auth/login',{scroll:false})
			}
		} catch (err: any) {
			if (err.response.status === 404) {
				toast.info("User not exist with this mail", {
					theme: "colored",
				});
			} else {
				toast.error(err.response.data.message, {
					theme: "colored",
				});
			}
		} finally {
			setUpload(false);
		}
	};

	return (
		<div
			className={`w-[1000px] max-lg:w-full h-auto border-[1px] rounded border-slate-800 flex justify-between items-center gap-5 p-4 overflow-hidden
		 max-sm:p-3 py-4`}
		>
			<div
				className={`min-w-[400px] w-[400px] h-auto flex max-[900px]:hidden justify-center items-center`}
			>
				<Image
					className={`w-full h-auto object-cover`}
					src={banner}
					alt="signup-banner"
				/>
			</div>
			<div
				className={`min-w-[300px] w-full h-auto flex justify-start items-center gap-4 flex-col p-3`}
			>
				<h1
					className={`w-full h-auto text-center font-roboto text-[35px] text-slate-300 font-bold`}
				>
					Update Password
				</h1>
				<span className={`w-full h-[1px] bg-slate-800`} />
				<form
					className={`w-full h-auto flex justify-center items-center gap-6 flex-col mt-2`}
					onSubmit={handleSubmit}
				>
					<CustomInput
						value={formState.password}
						onValueChange={(e: any) =>
							setFormState((pre) => ({
								...formState,
								...e,
							}))
						}
						type="password"
						label="New Password"
						name="password"
					/>
					<button
						className={`w-full h-full py-1 font-bold font-roboto bg-slate-300 transition-all duration-300 text-slate-900 rounded`}
					>
						Update Password
					</button>
				</form>
			</div>
			{upload && <LoadingFrame name="Updating Password..." />}
		</div>
	);
};

export default page;
