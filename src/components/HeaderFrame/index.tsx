"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeaderLogo from "../HeaderLogo";
import NavBarFrame from "./NavBarFrame";
import UserNavFrame from "./UserNav";

import { CgMenuLeft } from "react-icons/cg";

const HeaderFrame = () => {
	const [scrolling, setScrolling] = useState<boolean>(false);
	const [showNav, setShowNav] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement | null>(null);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = window.scrollY;
	// 		const threshold = 100;
	// 		setScrolling(scrollTop > threshold);
	// 	};

	// 	const handleClickOutside = (event: any) => {
	// 		if (
	// 			headerRef.current &&
	// 			!headerRef.current.contains(event.target)
	// 		) {
	// 			setShowNav(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	window.addEventListener("load", handleScroll);
	// 	document.addEventListener("click", handleClickOutside);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 		window.removeEventListener("load", handleScroll);
	// 		document.removeEventListener("click", handleClickOutside);
	// 	};
	// }, []);

	return (
		<header
			className={`left-0 top-0 w-full h-20 z-50 transition-all duration-300 bg-slate-950/90 ${
				scrolling ? "bg-slate-950/90 backdrop-blur fixed" : "absolute"
			} font-mont`}
			ref={headerRef}
		>
			<div
				className={`container max-sm:px-5 h-full flex justify-between items-center gap-5`}
			>
				<HeaderLogo />
				<NavBarFrame showNav={showNav} setShowNav={setShowNav} />
				<div
					className={`w-auto h-auto flex justify-center items-center gap-3`}
				>
					<UserNavFrame setShowNav={setShowNav} />
					<button className="w-8 h-8 max-lg:flex text-primary-fg hover:bg-secondary-bg p-1 hidden justify-center items-center rounded" onClick={()=>{
						setShowNav(true)
					}}>
						<CgMenuLeft className="w-full h-full" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default HeaderFrame;
