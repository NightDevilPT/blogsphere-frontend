import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

import logo from "../../../assets/dark.png";
import useLanguageEffect from "@/hooks/languageHook";

interface IProps {
	showNav: boolean;
	setShowNav: Dispatch<SetStateAction<boolean>>;
}

const NavBarFrame = ({ showNav, setShowNav }: IProps) => {
	const dictionary = useLanguageEffect()
	return (
		<div
			className={`w-auto h-auto transition-all duration-300 max-lg:fixed ${
				showNav ? "max-lg:right-0" : "max-lg:right-[-100%]"
			} max-lg:top-0 max-lg:w-full max-lg:h-[100vh] max-lg:backdrop-blur z-50`}
		>
			<nav
				className={`w-auto h-auto flex justify-center items-center gap-5 max-lg:w-52 max-lg:h-full max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-slate-900 max-lg:px-5 max-lg:flex-col max-lg:justify-start max-lg:pt-12`}
			>
				<button
					className={`absolute hidden -left-6 top-3 rounded w-6 h-6 p-1 max-lg:flex justify-center items-center bg-slate-300 text-slate-900`}
					onClick={(event: any) => {
						setShowNav(false);
					}}
				>
					<FaChevronRight className={`w-full h-full`} />
				</button>
				<Image
					src={logo}
					alt="nav-image"
					className={`w-full h-auto hidden max-lg:flex`}
				/>
				<div
					className={`w-full h-[2px] bg-slate-800 my-3 hidden max-lg:flex`}
				></div>
				<Link
					href={"/"}
					className={`font-mont font-bold text-sm text-slate-50 hover:text-highlight transition-all duration-200`}
				>
					{dictionary?.header?.home}
				</Link>
				<Link
					href={"/blogs"}
					className={`font-mont font-bold text-sm text-slate-50 hover:text-highlight transition-all duration-200`}
				>
					{dictionary?.header.blogs}
				</Link>
				<Link
					href={"/"}
					className={`font-mont font-bold text-sm text-slate-50 hover:text-highlight transition-all duration-200`}
				>
					{dictionary?.header.aboutus}
				</Link>
				<Link
					href={"/"}
					className={`font-mont font-bold text-sm text-slate-50 hover:text-highlight transition-all duration-200`}
				>
					{dictionary?.header.contactus}
				</Link>
			</nav>
		</div>
	);
};

export default NavBarFrame;
