import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";

import darklogo from "../../../assets/dark.png";
import lightlogo from "../../../assets/light.png";
import { useAppDispatch } from "@/redux/hooks";
import { setTheme } from "@/redux/slices/themeSlice";

interface IProps {
	hamburger: boolean;
	setHamburger: any;
}

const NavBarFrame = ({ hamburger, setHamburger }: IProps) => {
	const { theme } = useSelector((state: RootState) => state.theme);
	const [buttonStyle, setButtonStyle] = useState<string>("");
	const dispatch = useAppDispatch();

	useEffect(() => {
		setButtonStyle(
			theme === "dark"
				? " text-slate-300 hover:bg-slate-300 hover:text-slate-800"
				: "text-slate-800 hover:bg-slate-800 hover:text-slate-300"
		);
	}, [theme]);

	return (
		<div
			className={`${
				hamburger ? "right-0 z-50" : "right-[-100%]"
			} top-0 w-auto h-full max-lg:fixed max-lg:w-full max-lg:h-full max-lg:backdrop-blur transition-all duration-300`}
		>
			<nav
				className={`relative w-full h-full flex justify-center items-center gap-3 max-lg:w-[280px] max-lg:h-full max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:flex-col ${
					theme === "dark"
						? "max-lg:bg-slate-950 max-lg:border-l-slate-900"
						: "max-lg:bg-slate-100 max-lg:border-l-slate-400"
				} max-lg:justify-start max-lg:px-4 max-lg:border-l-[1px]`}
			>
				<RiCloseCircleFill
					className={`absolute right-2 top-2 w-[30px] h-[30px] ${
						theme === "dark" ? "text-slate-300" : "text-slate-800"
					} cursor-pointer hidden max-lg:flex`}
					onClick={() => setHamburger(false)}
				/>
				<Image
					className={`w-[200px] h-auto object-fill hidden max-lg:flex max-lg:mt-10`}
					alt="navbar-logo"
					src={theme === "dark" ? darklogo : lightlogo}
				/>
				<span
					className={`w-full h-[1px] ${
						theme === "dark" ? "bg-slate-900" : "bg-slate-400"
					} my-6 hidden max-lg:flex`}
				></span>
				<Link
					href={"/"}
					className={`max-lg:w-full ${buttonStyle} font-ubuntu text-[18px] px-2 py-1 rounded font-bold transition-all duration-300`}
				>
					Home
				</Link>
				<Link
					href={"/"}
					className={`max-lg:w-full ${buttonStyle} font-ubuntu text-[18px] px-2 py-1 rounded font-bold transition-all duration-300`}
				>
					About
				</Link>
				<Link
					href={"/"}
					className={`max-lg:w-full ${buttonStyle} font-ubuntu text-[18px] px-2 py-1 rounded font-bold transition-all duration-300`}
				>
					Contact Us
				</Link>
				<Link
					href={"/"}
					className={`max-lg:w-full ${buttonStyle} font-ubuntu text-[18px] px-2 py-1 rounded font-bold transition-all duration-300`}
				>
					Blogs
				</Link>
				{hamburger && (
					<button
						className={`absolute bottom-3 w-[calc(100%-40px)] ${buttonStyle} font-ubuntu text-[18px] px-2 py-1 rounded font-bold transition-all duration-300 text-left`}
						onClick={()=>dispatch(setTheme(theme==="dark"?"light":"dark"))}
					>
						Switch Theme : {theme}
					</button>
				)}
			</nav>
		</div>
	);
};

export default NavBarFrame;
