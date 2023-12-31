"use client";

import BannerFrame from "@/components/BannerFrame";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/services/ChangeTheme";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
	const { theme } = useSelector((state: RootState) => state.theme);

	useEffect(()=>{changeTheme(theme)},[])

	return (
		<div className={`w-full flex justify-center items-start bg-primary-bg`}>
			<BannerFrame />
		</div>
	);
}
