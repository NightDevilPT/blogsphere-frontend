'use client'

import { PageParamsProps } from "@/types/types";
import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";



const page = ({ params }: PageParamsProps) => {
	console.log(params)
	return (
		<div className="container max-sm:px-5 ">
			<Link href={'/'} className="w-full">
				<h1
					className={`w-full h-20 py-3 text-primary-fg border-b-2 border-b-border text-3xl font-bold justify-start items-center flex`}
				>
					<button className={`px-3 py-1 rounded text-primary-fg`}>
						<IoChevronBackOutline className={`w-5 h-5`} />
					</button>
					{params.id?"Update Blog":"Create Blog"}
				</h1>
			</Link>
		</div>
	);
};

export default page;
