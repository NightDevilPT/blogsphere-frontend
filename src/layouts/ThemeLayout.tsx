"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setThemeColor } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
import { ChildProps } from "@/types/types";
import React, { useEffect } from "react";

const ThemeLayout = ({ children }: ChildProps) => {
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch()

	const onChangeColor = () => {
		switch (theme) {
			case "dark":
				dispatch(setThemeColor({
					primaryBG: "bg-slate-950",
					primaryFG: "text-slate-300",
					secondaryBG: "bg-slate-900",
					secondaryFG: "text-slate-500",
					divider: "bg-slate-700",
					hoverBG:"bg-slate-300",
					hoverFG:"text-slate-800"
				}));
				break;
			case "light":
				dispatch(setThemeColor({
					primaryBG: "bg-slate-200",
					primaryFG: "text-slate-800",
					secondaryBG: "bg-slate-400",
					secondaryFG: "text-slate-500",
					divider: "bg-slate-500",
					hoverBG:"bg-slate-300",
					hoverFG:"text-slate-800"
				}));
				break
		}
	};

	useEffect(() => {
		onChangeColor();
	}, [theme]);
	return <>{children}</>;
};

export default ThemeLayout;
