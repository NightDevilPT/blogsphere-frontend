"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeaderLogo from "../HeaderLogo";
import NavBarFrame from "./NavBarFrame";
import UserNavFrame from "./UserNav";

import { CgMenuLeft } from "react-icons/cg";

const HeaderFrame = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement | null>(null);

	return (
		<header
			className={`fixed left-0 top-0 w-full h-20 z-40 transition-all duration-300 bg-slate-950/80 font-mont backdrop-blur`}
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
					<button className="w-8 h-8 max-lg:flex text-slate-300 p-1 hidden justify-center items-center rounded" onClick={()=>{
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
