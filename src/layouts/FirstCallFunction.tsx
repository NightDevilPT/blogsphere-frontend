"use client";

import FooteFrame from "@/components/FooterFrame";
import HeaderFrame from "@/components/HeaderFrame";
import PageLoading from "@/components/PageLoading";
import SearchPopupFrame from "@/components/SearchPopup";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLanguage } from "@/redux/slices/languageSlice";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { setTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/services/ChangeTheme";
import { ChildProps } from "@/types/types";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const FirstCallFunction = ({ children }: ChildProps) => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const [loading, setLoading] = useState<boolean>(true);
	const profile = useAppSelector((state: RootState) => state.profile);
	const pathName = usePathname();
	const excludedRoutes = [
		"/auth/login",
		"/auth/signup",
		"/auth/verify/",
		"/create-profile",
	];

	const fetchUser = async () => {
		await dispatch(fetchProfileData());
		setLoading(profile.loading);
	};

	useEffect(() => {
		changeTheme(theme);
		fetchUser();
		window.localStorage.setItem(
			"theme",
			window.localStorage.getItem("theme") || "dark"
		);
		changeTheme(window.localStorage.getItem("theme") || "dark");
		dispatch(setTheme(window.localStorage.getItem("theme") || "dark"));
		window.localStorage.setItem(
			"lang",
			window.localStorage.getItem("lang") || "french"
		);
		dispatch(setLanguage(window.localStorage.getItem("lang") || "french"));
	}, []);

	return (
		<SessionProvider>
			<ToastContainer autoClose={2000} />
			{excludedRoutes.includes(pathName) ||
			pathName.includes("/auth/verify") ? (
				<>{children}</>
			) : (
				<>
					<HeaderFrame />
					{children}
					<FooteFrame />
					<SearchPopupFrame />
				</>
			)}
			{loading && <PageLoading text="BlogSphere Loading..." />}
		</SessionProvider>
	);
};

export default FirstCallFunction;
