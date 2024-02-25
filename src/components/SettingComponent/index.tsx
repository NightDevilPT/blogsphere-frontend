"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { MdBrightness4 } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { setTheme } from "@/redux/slices/themeSlice";
import { changeTheme } from "@/services/ChangeTheme";
import { setItems } from "@/services/localStorage";
import { setLanguage } from "@/redux/slices/languageSlice";
import useLanguageEffect from "@/hooks/languageHook";

const themesConstants: any = {
	dark: {
		"primary-bg": "bg-[#020617]",
		"secondary-bg": "bg-[#0f172a]",
		"primary-fg": "bg-[#e2e8f0]",
		"secondary-fg": "bg-[#64748b]",
		highlight: "bg-[#06b6d4]",
		divider: "bg-[#1e293b]",
		from: "from-[#e98edf]",
		via: "via-[#f85e8a]",
		to: "to-[#fb8934]",
	},
	light: {
		"primary-bg": "bg-[#e2e8f0]",
		"secondary-bg": "bg-[#f1f5f9]",
		"primary-fg": "bg-[#333333]",
		"secondary-fg": "bg-[#666666]",
		highlight: "bg-[#2196F3]",
		divider: "bg-[#DDDDDD]",
		from: "from-[#e98edf]",
		via: "via-[#f85e8a]",
		to: "to-[#fb8934]",
	},
};

const languageConstants: any = {
	english: {
		label: "English",
		text: "English",
	},
	french: {
		label: "French",
		text: "française",
	},
	spanish: {
		label: "Spanish",
		text: "española",
	},
};

const SettingComponent = () => {
	const [button, setButton] = useState<string>("language");
	const dictionary = useLanguageEffect();

	return (
		<div
			className={`w-full h-[calc(100%-5rem)] flex justify-start items-start gap-5`}
		>
			<div
				className={`w-32 min-w-[130pxx] h-full py-5 flex justify-start items-start flex-col gap-5`}
			>
				<button
					className={`w-full h-auto px-3 py-3 gap-1 rounded flex justify-center items-center flex-col transition-all duration-300 ${
						button === "theme"
							? "bg-gradient-to-br from-from via-via to-to text-primary-fg"
							: "text-primary-fg hover:bg-primary-fg hover:text-primary-bg bg-secondary-bg"
					}`}
					onClick={() => setButton("theme")}
				>
					<MdBrightness4 className={`w-5 h-5`} />
					<span className={`w-full h-auto text-sm font-bold`}>
						{dictionary?.setting.theme}
					</span>
				</button>
				<button
					className={`w-full h-auto px-3 py-3 gap-1 rounded flex justify-center items-center flex-col transition-all duration-300 ${
						button === "language"
							? "bg-gradient-to-br from-from via-via to-to text-primary-fg"
							: "text-primary-fg hover:bg-primary-fg hover:text-primary-bg bg-secondary-bg"
					}`}
					onClick={() => setButton("language")}
				>
					<IoLanguage className={`w-5 h-5`} />
					<span className={`w-full h-auto text-sm font-bold`}>
						{dictionary?.setting.language}
					</span>
				</button>
			</div>
			<div className={`w-[2px] h-full bg-divider`} />
			<div
				className={`w-full h-full py-5 flex justify-start items-start flex-col gap-5`}
			>
				<h1 className={`capitalize text-2xl font-bold text-primary-fg`}>
					{button === "language"
						? dictionary?.setting.languagechange
						: dictionary?.setting.themechange}
				</h1>
				{button === "theme" ? (
					<ThemeButtonFrame />
				) : (
					<LanguageButtonFrame />
				)}
			</div>
		</div>
	);
};

const ThemeButtonFrame = () => {
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch();
	const dictionary = useLanguageEffect();
	return (
		<div
			className={`w-full h-auto max-h-full overflow-y-auto flex justify-start items-start flex-wrap gap-5`}
		>
			{Object.keys(themesConstants).map(
				(items: string, index: number) => {
					return (
						<button
							className={`w-auto h-auto flex justify-start items-center gap-5 rounded py-2 px-4 border-[1px] border-primary-fg text-primary-fg`}
							key={index + items}
							onClick={() => {
								changeTheme(items);
								setItems("theme", items);
								dispatch(setTheme(items));
							}}
						>
							<span
								className={`relative w-4 h-4 rounded-full ${
									theme === items && "bg-primary-fg"
								} flex justify-center items-center after:rounded-full after:content-[''] after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:border-[1px] after:border-primary-fg`}
							></span>
							<div
								className={`w-auto h-auto flex justify-center items-start flex-col gap-1`}
							>
								<span className={`text-xl capitalize`}>
									{items === "dark"
										? dictionary?.setting.dark
										: dictionary?.setting.light}
								</span>
								<div
									className={`w-auto h-auto justify-center items-center flex gap-1`}
								>
									<span
										className={`w-3 h-5 rounded-full ${themesConstants[items]["primary-bg"]} border-[1px] border-primary-fg`}
									/>
									<span
										className={`w-3 h-5 rounded-full ${themesConstants[items]["secondary-bg"]} border-[1px] border-primary-fg`}
									/>
									<div
										className={`w-3 h-5 rounded-full ${themesConstants[items]["primary-fg"]} border-[1px] border-primary-fg`}
									></div>
									<span
										className={`w-3 h-5 rounded-full ${themesConstants[items]["secondary-fg"]} border-[1px] border-primary-fg`}
									/>
									<span
										className={`w-3 h-5 rounded-full ${themesConstants[items]["highlight"]} border-[1px] border-primary-fg`}
									/>
									<span
										className={`w-3 h-5 rounded-full ${themesConstants[items]["divider"]} border-[1px] border-primary-fg`}
									/>
									<span
										className={`w-3 h-5 rounded-full bg-gradient-to-br ${themesConstants[items]["from"]} ${themesConstants[items]["via"]} ${themesConstants[items]["to"]} border-[1px] border-primary-fg`}
									/>
								</div>
							</div>
						</button>
					);
				}
			)}
		</div>
	);
};

const LanguageButtonFrame = () => {
	const { lang } = useAppSelector((state: RootState) => state.language);
	const dispatch = useAppDispatch();
	return (
		<div
			className={`w-full h-auto max-h-full overflow-y-auto flex justify-start items-start flex-wrap gap-5`}
		>
			{Object.keys(languageConstants).map(
				(items: string, index: number) => {
					console.log(items === lang, items);
					return (
						<button
							className={`w-auto h-auto flex justify-start items-center gap-5 rounded py-2 px-4 border-[1px] border-primary-fg text-primary-fg`}
							key={index + items}
							onClick={() => {
								dispatch(setLanguage(items));
								window.localStorage.setItem("lang", items);
							}}
						>
							<span
								className={`relative w-4 h-4 rounded-full ${
									lang === items && "bg-primary-fg"
								} flex justify-center items-center after:rounded-full after:content-[''] after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:border-[1px] after:border-primary-fg`}
							></span>
							<div
								className={`w-auto h-auto flex justify-center items-start flex-col`}
							>
								<span className={`text-xl capitalize`}>
									{items}
								</span>
								<span>{languageConstants[items].text}</span>
							</div>
						</button>
					);
				}
			)}
		</div>
	);
};

export default SettingComponent;
