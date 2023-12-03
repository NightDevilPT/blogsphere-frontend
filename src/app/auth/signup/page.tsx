"use client";

import { RootState } from "@/redux/store";
import { Signup } from "@/types/types";

import banner from "../../../assets/form.png";
import CustomInput from "@/components/Inputs";
import LoadingFrame from "@/components/loader/LoadingFrame";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { env } from "@/config/env";

const page = () => {
	const [formState, setFormState] = useState<Signup>({
		username: "",
		username_error: false,
		password: "",
		password_error: false,
		email: "",
		email_error: false,
	});
	const [upload, setUpload] = useState<boolean>(false);
	const theme = useSelector((state: RootState) => state.theme);
	const router = useRouter()

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (formState.username === "") {
			toast.info("User name required...", {
				theme: "colored",
			});
			return;
		}
		if (formState.email === "") {
			toast.info("Email required...", {
				theme: "colored",
			});
			return;
		}
		if (formState.password === "") {
			toast.info("Password required...", {
				theme: "colored",
			});
			return;
		}
		setUpload(true);
		const formData = new FormData();
		formData.append("username", formState.username);
		formData.append("email", formState.email);
		formData.append("password", formState.password);

		try {
			const res = await axios.post(
				`${env.BACKEND_URL}/user/create`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if(res.status===200 || res.status===201){
				toast.success(res.data.message, {
					theme: "colored",
				});
				router.push('/auth/login',{scroll:false})
			}
		} catch (err:any) {
			if(err.response.status===403){
				toast.info(err.response.data.message, {
					theme: "colored",
				});
			}else{
				toast.error(err.response.data.message, {
					theme: "colored",
				});
			}
		}
		setUpload(false);
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
				T
			</div>
			<div
				className={`min-w-[300px] w-full h-auto flex justify-start items-center gap-4 flex-col p-3`}
			>
				<h1
					className={`w-full h-auto text-center font-roboto text-[40px] text-slate-300 font-bold`}
				>
					Signup
				</h1>
				<span className={`w-full h-[1px] bg-slate-800`} />
				<form
					className={`w-full h-auto flex justify-center items-center gap-6 flex-col mt-2`}
					onSubmit={handleSubmit}
				>
					<CustomInput
						value={formState.username}
						onValueChange={(e: any) =>
							setFormState((pre) => ({
								...formState,
								...e,
							}))
						}
						type="string"
						label="Username"
						name="username"
						disabled={upload}
					/>
					<CustomInput
						value={formState.email}
						onValueChange={(e: any) =>
							setFormState((pre) => ({
								...formState,
								...e,
							}))
						}
						type="string"
						label="Email"
						name="email"
						disabled={upload}
					/>
					<CustomInput
						value={formState.password}
						onValueChange={(e: any) =>
							setFormState((pre) => ({
								...formState,
								...e,
							}))
						}
						type="password"
						label="Password"
						name="password"
						disabled={upload}
					/>
					<button
						className={`w-full h-full py-1 font-bold font-roboto bg-slate-300 transition-all duration-300 text-slate-900 rounded`}
						type="submit"
					>
						Signup
					</button>
				</form>
				<span
					className={`w-full h-auto text-slate-300 text-center text-[15px] font-bold font-roboto`}
				>
					Already have an account?{" "}
					<Link
						href={"/auth/login"}
						className={`text-sky-600 underline`}
					>
						Login
					</Link>
				</span>
			</div>
			{upload && <LoadingFrame name="Registering New User" />}
		</div>
	);
};

export default page;
