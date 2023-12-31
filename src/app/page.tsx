"use client";
import HomeBannerFrame from "@/components/Banner";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { changeTheme } from "@/services/ChangeTheme";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
	const { theme } = useSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch();

	useEffect(()=>{changeTheme(theme)},[])

	return (
		<div className={`w-full h-full flex justify-center items-center bg-primary-bg`}>
			<HomeBannerFrame />
		</div>
	);
}
