import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const getThemeColor = () => {
	const theme = useSelector((state: RootState) => state.theme);
	return theme === "dark" ? "bg-slate-950" : "bg-slate-300";
};

export default getThemeColor;
