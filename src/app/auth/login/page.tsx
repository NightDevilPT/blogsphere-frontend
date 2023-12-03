"use client";

import { Login } from "@/types/types";
import { RootState } from "@/redux/store";
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
import { useAppDispatch } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { axiosInstance } from "@/services/Request";

const page = () => {
	const [formState, setFormState] = useState<Login>({
		password: "",
		password_error: false,
		email: "",
		email_error: false,
	});
	const theme = useSelector((state: RootState) => state.theme);
	const [upload, setUpload] = useState<boolean>(false);
	const router = useRouter();
	const dispatch = useAppDispatch()

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (formState.email === "") {
			toast.info("Email required", {
				theme: "colored",
			});
			return;
		}
		if (formState.password === "") {
			toast.info("Password required", {
				theme: "colored",
			});
			return;
		}

		setUpload(true);
		const form = new FormData();
		form.append("email", formState.email);
		form.append("password", formState.password);

		try {
			const response = await axiosInstance.post(`/user/login`,
				form
			);

			if (response.status === 200) {
				toast.success(response.data.message.message, {
					theme: "colored",
				});
				window.localStorage.setItem(
					"authToken",
					response.data.message.token
				);
				dispatch(fetchProfileData());
				router.push("/", { scroll: false });
			}
		} catch (err: any) {
			if (err.response.status === 401) {
				toast.info("Invalid email or password", {
					theme: "colored",
				});
				return;
			}
			toast.warning(err.response.data.message, {
				theme: "colored",
			});
		} finally {
			setUpload(false);
		}
	};

	useEffect(() => {}, []);

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
					className={`w-full h-auto text-center font-roboto text-[40px] text-slate-300 font-bold`}
				>
					Login
				</h1>
				<span className={`w-full h-[1px] bg-slate-800`} />
				<form
					className={`relative w-full h-auto flex justify-center items-center gap-6 flex-col mt-2`}
					onSubmit={handleSubmit}
				>
					<CustomInput
						value={formState.email}
						onValueChange={(e: any) =>
							setFormState((pre) => ({ ...formState, ...e }))
						}
						type="string"
						label="Email"
						name="email"
					/>
					<CustomInput
						value={formState.password}
						onValueChange={(e: any) =>
							setFormState((pre) => ({ ...formState, ...e }))
						}
						type="password"
						label="Password"
						name="password"
					/>
					<button
						className={`w-full h-full py-1 font-bold font-roboto bg-slate-300 transition-all duration-300 text-slate-900 rounded`}
						type="submit"
					>
						Login
					</button>
				</form>
				<span
					className={`asbolute bottom-0 right-0 w-full h-auto text-slate-300 text-right text-[15px] font-bold font-roboto`}
				>
					<Link
						href={"/auth/forget"}
						className={`text-sky-600 underline`}
					>
						Forget Password
					</Link>
				</span>
			</div>
			{upload && <LoadingFrame name="Loging User..." />}
		</div>
	);
};

export default page;
