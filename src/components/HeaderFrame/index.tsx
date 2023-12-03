"use client";

import { RootState } from "@/redux/store";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import darkLogo from "../../assets/dark.png";
import smallDarkLogo from "../../assets/small-dark.png";
import lightLogo from "../../assets/light.png";
import smallLightLogo from "../../assets/small-light.png";
import NavBarFrame from "./NavBar";
import SearchBar from "./SearchBar";

const HeaderFrame = () => {
	const {theme} = useSelector((state: RootState) => state.theme);
	const [hamburger, setHamburger] = useState<boolean>(false);
	const [win, setWin] = useState<boolean>(false);
	const [logo,setLogo]=useState<any>();

	useEffect(()=>{
		if(win){
			setLogo(theme==="dark"?smallDarkLogo:smallLightLogo)
		}else{
			setLogo(theme==="dark"?darkLogo:lightLogo)
		}
	},[win,theme])

	useEffect(() => {
		const updateWindowSize = () => {
			if(window.innerWidth<600){
				setWin(true);
			}else{
				setWin(false)
			}
		};

		window.addEventListener("resize", updateWindowSize);

		return () => {
			window.removeEventListener("resize", updateWindowSize);
		};
	}, []);

	return (
		<div
			className={`w-full h-[80px] min-h-[80px] relative z-10 ${
				theme === "dark" ? "bg-slate-950" : "bg-slate-100 shadow-md shadow-slate-600/10"
			}`}
		>
			<div
				className={`container transition-all duration-300 w-full h-full flex justify-between items-center px-2`}
			>
				<div
					className={`h-[45px] transition-all duration-300 flex justify-center items-center`}
				>
					<Image
						className={`w-full h-[45px] object-contain cursor-pointer`}
						src={logo}
						alt="logo"
					/>
				</div>
				<NavBarFrame hamburger={hamburger} setHamburger={setHamburger} />
				<SearchBar setHamburger={setHamburger} />
			</div>
		</div>
	);
};

export default HeaderFrame;
