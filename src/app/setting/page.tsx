'use client'

import CreateProfile from "@/components/CreatePrrofileComponent/CreateProfile";
import SettingComponent from "@/components/SettingComponent";
import useLanguageEffect from "@/hooks/languageHook";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
	const dictionary = useLanguageEffect()
	return (
		<div className="container h-full max-sm:px-5 ">
			<Link href={'/'} className="w-full">
				<h1
					className={`w-full h-20 py- text-primary-fg border-b-2 border-b-border text-3xl max-md:text-2xl max-sm:text-xl font-bold justify-start items-center flex`}
				>
					<button className={`px-3 py-1 rounded text-primary-fg`}>
						<IoChevronBackOutline className={`w-5 h-5`} />
					</button>
					{dictionary?.setting.setting}
				</h1>
			</Link>
			<SettingComponent />
		</div>
	);
};

export default page;
