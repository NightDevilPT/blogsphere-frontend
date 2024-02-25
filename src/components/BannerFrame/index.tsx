"use client";

import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import banner from "../../assets/nature-3082832_1920.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setShowSearch } from "@/redux/slices/dialogSlice";
import useLanguageEffect from "@/hooks/languageHook";

const BannerFrame = () => {
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch();
	const dictionary = useLanguageEffect();
	return (
		<section className={`relative w-full h-[80vh] overflow-hidden`}>
			<Image
				src={banner}
				alt="banner-image"
				className="w-full h-full object-cover"
			/>
			<div
				className={`w-full h-full absolute left-0 top-0 backdrop-blur-sm`}
			></div>
			<div
				className={`w-full h-full absolute left-0 top-0 bg-gradient-to-t  ${
					theme !== "light"
						? "from-primary-bg to-transparent"
						: ""
				}`}
			>
				<div className="container h-full max-sm:px-5 flex justify-center items-center gap-3 flex-col">
					<h1
						className={`text-slate-50 text-4xl font-bold font-ubuntu text-center max-md:text-2xl`}
					>
						{dictionary?.banner.title}
					</h1>
					<h3
						className={`text-slate-50 text-xl max-lg:text-base min-w-[80%] w-[80%] max-lg:min-w-[100%] max-lg:w-[100%] font-ubuntu text-center`}
					>
						{dictionary?.banner.subtitle}
					</h3>
					<button
						className={`w-96 max-md:w-[90%] h-auto px-2 pl-4 py-1 rounded-md bg-slate-50 flex justify-between items-center cursor-pointer`}
						onClick={() => {
							dispatch(setShowSearch(true));
						}}
					>
						<span className={`text-base text-secondary-fg`}>
							{dictionary?.banner.placeholder}
						</span>
						<div
							className={`w-auto h-auto flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 transition-all duration-300 px-2 py-1 rounded text-slate-50`}
						>
							<span className={`text-base`}>{dictionary?.banner.search}</span>
							<IoSearchOutline className={"w-5 h-5"} />
						</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default BannerFrame;
