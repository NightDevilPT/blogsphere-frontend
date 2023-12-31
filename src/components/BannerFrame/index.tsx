import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import banner from "../../assets/nature-3082832_1920.jpg";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const BannerFrame = () => {
	const { theme } = useAppSelector((state: RootState) => state.theme);
	return (
		<section className={`relative w-full h-[70vh] overflow-hidden`}>
			<Image
				src={banner}
				alt="banner-image"
				className="w-full h-full object-cover"
			/>
			<div
				className={`w-full h-full absolute left-0 top-0 backdrop-blur-sm`}
			></div>
			<div className={`w-full h-full absolute left-0 top-0 ${theme === "dark" && " bg-gradient-to-t from-primary-bg to-transparent"}`}>
				<div className="container h-full max-sm:px-5 flex justify-center items-center gap-3 flex-col">
					<h1 className={`text-slate-50 text-4xl font-bold font-ubuntu`}>Welcome to BlogSphere</h1>
					<h3 className={`text-slate-50 text-xl min-w-[80%] w-[80%] max-lg:min-w-[100%] max-lg:w-[100%] font-ubuntu text-center`}>Welcome to the world of blog writing
						Awesome place to make oneself productive and entertained through daily updates.</h3>
					<div className={`w-96 h-auto px-2 pl-4 py-1 rounded-md bg-slate-50 flex justify-between items-center cursor-pointer`}>
						<span className={`text-base text-secondary-fg`}>Explore now...</span>
						<div className={`w-auto h-auto flex justify-center items-center gap-2 bg-slate-900 px-2 py-1 rounded text-slate-50`}>
							<span className={`text-base`}>Search</span>
							<IoSearchOutline className={'w-5 h-5'} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerFrame;
