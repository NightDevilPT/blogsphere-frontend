"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
	const { theme, color } = useSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch();

	return (
		<div
			className={`w-full h-full flex justify-center items-center ${color.primaryBG} `}
		></div>
	);
}
