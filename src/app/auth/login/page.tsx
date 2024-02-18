"use client";

import React, { useState } from "react";
import { SignupType } from "@/types/types";
import InputComponent from "@/components/FormComponent/InputComponent";

import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Request } from "@/services/Request";
import ShowNotification from "@/components/ShowNotification";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";

const index = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const dispatch = useAppDispatch()
	const loginFunction = async (formData: {
		email: string;
		password: string;
	}) => {
		setLoading(true);
		const res = await Request(`/user/login`, "POST", formData);
		setLoading(false);
		if (!res.statusCode) {
			window.localStorage.setItem("token", res.jwt);
			window.localStorage.setItem("id", res.id);
			ShowNotification(res.message);
			dispatch(fetchProfileData())
			router.push("/");

		} else {
			ShowNotification(res.message);
		}
	};

	return (
		<div
			className={`w-full h-full flex justify-center items-center z-50 relative`}
		>
			<div
				className={`container w-96 h-auto p-5 rounded bg-slate-950 flex justify-start items-center flex-col`}
			>
				<h1
					className={`w-full h-auto text-slate-300 font-bold text-2xl pb-5`}
				>
					Login
				</h1>
				<form
					className={`w-full h-auto flex justify-start items-start gap-4 text-slate-300 flex-col`}
					onSubmit={(event: any) => {
						event.preventDefault();
						loginFunction({
							email: event.target.email.value,
							password: event.target.password.value,
						});
					}}
				>
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
						<Link
							href={"/auth/resend/forget-password"}
							className="text-highlight font-bold"
						>
							Forget Password
						</Link>
					</div>

					<button
						type="submit"
						className={`w-full h-10 bg-slate-200 text-slate-900 font-bold rounded flex justify-center items-center gap-2`}
						disabled={loading}
					>
						Login{" "}
						{loading && (
							<span
								className={`w-5 h-5 border-2 rounded-full border-slate-300 border-t-secondary-fg animate-spin`}
							/>
						)}
					</button>
				</form>
				<div
					className={`w-full h-auto flex justify-center items-center gap-2 text-xs mt-1 text-primary-fg`}
				>
					Create a new Account?{" "}
					<Link
						href={"/auth/signup"}
						className="text-highlight font-bold"
					>
						Signup
					</Link>
				</div>
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
							signIn("github", {
								callbackUrl: "/auth/provider/github",
							});
						}}
					>
						<FaGithub className={`w-5 h-5`} />
						<span className={`text-sm font-bold text-primary-bg`}>
							Login With Github
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default index;
