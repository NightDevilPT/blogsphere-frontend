"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
	const { theme } = useSelector((state: RootState) => state.theme);
	return (
		<div
			className={`w-full h-full flex justify-center items-center ${
				theme === "dark" ? "bg-slate-950" : "bg-slate-100"
			}`}
		></div>
	);
}
