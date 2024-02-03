"use client";

import { SignupType } from "@/types/types";

import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { signupUserThunk } from "@/redux/slices/signupSlice";
import ShowNotification from "@/components/ShowNotification";
import InputComponent from "@/components/FormComponent/InputComponent";

const index = () => {
	const { data, loading, error } = useAppSelector(
		(state: RootState) => state.signup
	);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const registerNewUser = async (formData: SignupType) => {
		await dispatch(signupUserThunk(formData));
	};

	useEffect(() => {
		if (data || error) {
			ShowNotification(data ? data : error);
		}
		if(data){
			router.push('/auth/login')
		}
	}, [data, error]);

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
					/>
					<InputComponent
						label="email"
						required={true}
						type="email"
					/>
					<InputComponent
						label="password"
						required={true}
						type="password"
					/>

					<div
						className={`w-full h-auto flex justify-end items-end gap-2 text-xs`}
					>
						Already have an account?{" "}
						<Link
							href={"/auth/login"}
							className="text-highlight font-bold"
						>
							Login
						</Link>
					</div>

					<button
						type="submit"
						className={`w-full h-10 bg-slate-200 text-slate-900 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						Register{" "}
						{loading && (
							<span
								className={`w-5 h-5 border-2 rounded-full border-slate-300 border-t-secondary-fg animate-spin`}
							/>
						)}
					</button>
				</form>
				<div
					className={`w-[80%] flex justify-center items-center gap-1 my-4`}
				>
					<span className={`flex-1 h-[2px] bg-border`}></span>
					<span className={` text-primary-fg`}>OR</span>
					<span
						className={`flex-1 h-[2px] bg-border font-bold`}
					></span>
				</div>
				<div
					className={`w-full h-auto flex justify-between items-center gap-2`}
				>
					<button
						className={`w-full h-auto py-2 rounded flex justify-center items-center gap-2 bg-primary-fg text-primary-bg`}
						onClick={() => {
							signIn("github", { callbackUrl: "/auth/github" });
						}}
					>
						<FaGithub className={`w-5 h-5`} />
						<span className={`text-sm font-bold text-primary-bg`}>
							SignUp With Github
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default index;
