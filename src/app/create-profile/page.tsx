'use client'

import CreateProfile from "@/components/CreatePrrofileComponent/CreateProfile";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
	const {data} = useAppSelector((state:RootState)=>state.profile);
	return (
		<div className="container max-sm:px-5 ">
			<Link href={'/'} className="w-full">
				<h1
					className={`w-full h-20 py-3 text-primary-fg border-b-2 border-b-border text-3xl font-bold justify-start items-center flex`}
				>
					<button className={`px-3 py-1 rounded text-primary-fg`}>
						<IoChevronBackOutline className={`w-5 h-5`} />
					</button>
					{data?.profile?"Edit Profile":"Create Profile"}
				</h1>
			</Link>
			<CreateProfile />
		</div>
	);
};

export default page;
