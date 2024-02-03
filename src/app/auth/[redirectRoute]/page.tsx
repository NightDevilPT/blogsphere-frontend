"use client";

import PageLoading from "@/components/PageLoading";
import ShowNotification from "@/components/ShowNotification";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signupUserThunk } from "@/redux/slices/signupSlice";
import { RootState } from "@/redux/store";
import { SignupType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = ({ params }: { params: { redirectRoute: string } }) => {
	const { data } = useSession();
	const dispatch = useAppDispatch();
	const router = useRouter();
	const signIn = useAppSelector((state: RootState) => state.signup);
	useEffect(() => {
		if (data?.user) {
			const formData = {
				username: data.user?.name,
				image: data.user?.image,
				email: data.user?.email,
				provider: params.redirectRoute,
			};
			if (formData) {
				dispatch(signupUserThunk(formData as SignupType));
			}
		}
	}, [data]);

	useEffect(() => {
		if (signIn.data || signIn.error) {
			ShowNotification(signIn.data ? {message:"Signin Success"} : signIn.error);
		}
		if (signIn.data) {
			window.localStorage.setItem('token',signIn.data.jwt)
			window.localStorage.setItem('id',signIn.data.id)
			router.push("/");
		}
	}, [signIn.data,signIn.error]);

	return (
		<div className="w-full h-full flex justify-center items-center gap-5 flex-col">
			<PageLoading text="Signing With Github..." />
		</div>
	);
};

export default page;
