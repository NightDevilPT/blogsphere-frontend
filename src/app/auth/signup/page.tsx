"use client";

import { SignupType } from "@/types/types";

import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import InputComponent from "@/components/FormComponent/InputComponent";
import { Request } from "@/services/Request";

const index = () => {
	const [loading,setLoading]=useState<boolean>(false);
	const router = useRouter();
	const registerNewUser = async (formData: SignupType) => {
		setLoading(true)
		const res = await Request(`/user/create`, "POST", formData);
		setLoading(false)
		router.push('/auth/login')
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
					Signup
				</h1>
				<form
					className={`w-full h-auto flex justify-start items-start gap-4 text-slate-300 flex-col`}
					onSubmit={(event: any) => {
						event.preventDefault();
						registerNewUser({
							username: event.target.username.value,
							email: event.target.email.value,
							password: event.target.password.value,
							provider:"local"
						});
					}}
				>
					<InputComponent
						label="username"
						required={true}
						type="text"
						background="bg-slate-900"
					/>
					<InputComponent
						label="email"
						required={true}
						type="email"
						background="bg-slate-900"
					/>
					<InputComponent
						label="password"
						required={true}
						type="password"
						background="bg-slate-900"
					/>

					<div
						className={`w-full h-auto flex justify-end items-end gap-2 text-xs`}
					>
						Already have an account?{" "}
						<Link
							href={"/auth/login"}
							className=" text-sky-600 font-bold"
						>
							Login
						</Link>
					</div>

					<button
						type="submit"
						className={`w-full h-10 bg-slate-200 text-slate-950 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						Register{" "}
						{loading && (
							<span
								className={`w-5 h-5 border-2 rounded-full border-slate-300 border-t-slate-800 animate-spin`}
							/>
						)}
					</button>
				</form>
				<div
					className={`w-[80%] flex justify-center items-center gap-1 my-4`}
				>
					<span className={`flex-1 h-[2px] bg-border`}></span>
					<span className={` text-slate-300`}>OR</span>
					<span
						className={`flex-1 h-[2px] bg-border font-bold`}
					></span>
				</div>
				<div
					className={`w-full h-auto flex justify-between items-center gap-2`}
				>
					<button
						className={`w-full h-auto py-2 rounded flex justify-center items-center gap-2 bg-slate-200 text-slate-950`}
						onClick={() => {
							signIn("github", { callbackUrl: "/auth/provider/github" });
						}}
					>
						<FaGithub className={`w-5 h-5`} />
						<span className={`text-sm font-bold text-slate-950`}>
							SignUp With Github
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default index;
