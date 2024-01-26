"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/services/ChangeTheme";
import { ChildProps } from "@/types/types";
import React, { useEffect } from "react";

const FirstCallFunction = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state: RootState) => state.theme);

	const fetchProfile = async () => {
		dispatch(fetchProfileData());
	};

	useEffect(() => {
		fetchProfile();
		changeTheme(theme);
	}, []);
	return <>{children}</>;
};

export default FirstCallFunction;
