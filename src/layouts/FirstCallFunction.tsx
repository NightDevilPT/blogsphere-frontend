"use client";

import FooteFrame from "@/components/FooterFrame";
import HeaderFrame from "@/components/HeaderFrame";
import SearchPopupFrame from "@/components/SearchPopup";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProfileData } from "@/redux/slices/profileSlice";
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
	const excludedRoutes = ["/auth/login", "/auth/signup", "/auth/verify/"];

	const fetchUser = async () => {
		await dispatch(fetchProfileData());
		setLoading(profile.loading);
	};

	useEffect(() => {
		changeTheme(theme);
		fetchUser();
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
		</SessionProvider>
	);
};

export default FirstCallFunction;
