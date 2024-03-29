"use client";

import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { blogType } from "@/types/types";
import LoadingFrame from "../LoadingFrame";
import BlogFrame from "../BlogFrame";
import { dummyBlogs } from "@/constants/blogs";

interface IProps {
	changeLayout?: boolean;
	title: string;
}

const CarouselFrame = ({ changeLayout, title }: IProps) => {
	const [layout, setLayout] = useState<boolean>(false);
	const [loading,setLoading]=useState<boolean>(false);
	const blogs: blogType[] = dummyBlogs

	setInterval(()=>{
		setLoading(true);
	},3000)

	return (
		<div className={`w-full h-auto p-5 transition-all duration-300`}>
			<div
				className={`container flex justify-start items-start gap-3 flex-col`}
			>
				<div
					className={`w-full h-full flex justify-between items-center gap-5`}
				>
					<h3 className={`text-base text-primary-fg font-bold `}>
						{title}
					</h3>
					{changeLayout && (
						<button
							className={`w-auto h-auto relative grid grid-cols-2 gap-2 p-2 justify-center items-center rounded bg-secondary-bg`}
							onClick={(event: any) => {
								setLayout(!layout);
							}}
						>
							<div
								className={`w-7 h-7 absolute rounded ${
									layout ? "left-[5px]" : "left-[50%]"
								} transition-all duration-300 bg-gradient-to-br from-from via-via to-to`}
							></div>
							<TfiLayoutListThumbAlt
								className={`w-5 h-5 relative z-10 transition-all delay-200 duration-200 ${
									layout
										? "text-slate-200"
										: "text-primary-fg"
								}`}
							/>
							<BsGridFill
								className={`w-5 h-5 relative z-10  transition-all delay-200 duration-200 ${
									!layout
										? "text-slate-200"
										: "text-primary-fg"
								}`}
							/>
						</button>
					)}
				</div>
				<div
					className={`w-full h-auto grid ${
						blogs.length > 2
							? "grid-cols-[repeat(auto-fit,_minmax(320px,1fr))]"
							: "grid-cols-4"
					} gap-4`}
				>
					{loading ? (
						<BlogFrame blogs={blogs} layout={layout} />
					) : (
						<LoadingFrame layout={layout} />
					)}
				</div>
			</div>
		</div>
	);
};

export default CarouselFrame;
