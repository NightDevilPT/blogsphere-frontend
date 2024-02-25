import { formatNumber } from "@/services/ConvertCount";
import { blogType } from "@/types/types";
import React from "react";

import { AiFillLike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";

interface IProps {
	blogs: blogType;
}

const HorizontalCardFrame = ({ blogs }: IProps) => {
	return (
		<div
			className={`relative group min-w-[320px] h-44 flex justify-start items-start gap-1 bg-secondary-bg rounded overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300`}
		>
			<div className={` w-28 min-w-[120px] h-full bg-border`}>
				<img src={blogs.url} className={`w-full h-full object-cover`} alt="blogs-image" />
			</div>

			<div
				className={`w-full h-full flex justify-start items-start gap-1 flex-col p-2`}
			>
				<div
					className={`w-full h-8 text-primary-fg text-xl line-clamp-1 font-bold `}
				>
					{blogs.title}
					<div className={`w-[50%] h-[4px] bg-red-500 mt-2px`}></div>
				</div>
				<div
					className={`w-[90%] h-auto overflow-hidden rounded text-primary-fg`}
				>
					<div className="line-clamp-3 text-sm">
						{blogs.description}
					</div>
				</div>
				<div
					className={`w-full h-auto mt-2 flex justify-end items-end gap-1`}
				>
					<span className={`text-xs text-primary-fg`}>
						{new Date(blogs.createdAt).toLocaleString()}
					</span>
				</div>

				<div
					className={`w-full h-auto flex justify-end items-center gap-5 mt-3`}
				>
					<div
						className={`w-auto h-5 rounded flex justify-center items-center gap-1`}
					>
						<AiFillLike className={`w-5 h-5 text-red-500`} />
						<span
							className={`h-full flex justify-center items-center text-sm text-primary-fg font-bold`}
						>
							{formatNumber(blogs.likes)}
						</span>
					</div>
					<div
						className={`relative w-auto h-5 rounded flex justify-center items-center gap-1`}
					>
						<BiSolidCommentDetail
							className={`w-5 h-5 relative top-[2px] text-highlight`}
						/>
						<span
							className={`h-full flex justify-center items-center text-sm text-primary-fg font-bold`}
						>
							{formatNumber(blogs.comments)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalCardFrame;
