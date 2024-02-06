import { ChildProps } from "@/types/types";
import Image from "next/image";
import React from "react";

import bannerImage from "../../../assets/nature-3082832_1920.jpg"

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Login',
  description: 'Blogsphere Login',
}

const index = ({ children }: ChildProps) => {
	return (
		<div className={`w-full h-full absolute left-0 top-0 z-50`}>
			<div
				className={`w-full h-full absolute left-0 top-0`}
			>
				<Image src={bannerImage} className="w-full h-full object-cover" alt="signup-banner" />
			</div>
			<div
				className={`w-full h-full absolute left-0 top-0 backdrop-blur bg-slate-950/50`}
			></div>
			{children}
		</div>
	);
};

export default index;
