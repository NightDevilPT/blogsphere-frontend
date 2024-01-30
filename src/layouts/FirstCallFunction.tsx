"use client";

import PageLoading from "@/components/PageLoading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/services/ChangeTheme";
import { ChildProps } from "@/types/types";
import React, { useEffect, useState } from "react";

const FirstCallFunction = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const [loading, setLoading] = useState<boolean>(true);
	const profile = useAppSelector((state:RootState)=>state.profile);

	const fetchUser=async ()=>{
		await dispatch(fetchProfileData())
		console.log(profile.loading);
		setLoading(profile.loading)
	}

	useEffect(() => {
		changeTheme(theme);
		fetchUser()
	}, []);

	return loading ? <PageLoading /> : <>{children}</>;
};

export default FirstCallFunction;
