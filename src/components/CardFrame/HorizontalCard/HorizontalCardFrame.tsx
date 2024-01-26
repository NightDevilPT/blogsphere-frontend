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
			className={`relative group min-w-[320px] h-auto grid-cols-2 gap-3 bg-secondary-bg rounded overflow-hidden cursor-pointer`}
		>
			<div className={`w-full h-48 rounded bg-border`}>
				<img src={blogs.url} className={`w-full h-full object-cover`} />
			</div>
			<div
				className={`w-full h-48 absolute left-0 -bottom-[170px] group-hover:bottom-0 transition-all duration-300 bg-slate-900/60 backdrop-blur flex justify-start  items-start gap-3 flex-col p-4`}
			>
				<div
					className={`w-full h-8 rounded text-primary-fg text-xl truncate font-bold `}
				>
					{blogs.title}
				</div>
				<div
					className={`w-[90%] h-16 overflow-hidden rounded text-primary-fg`}
				>
					<div className="line-clamp-3 text-sm">
						{blogs.description}
					</div>
				</div>
				<div
					className={`w-full h-auto flex justify-end items-end gap-1`}
				>
					<span className={`text-xs text-primary-fg`}>
						{new Date(blogs.createdAt).toLocaleString()}
					</span>
				</div>
				<div
					className={`w-full h-auto flex justify-start items-center gap-5`}
				>
					<div
						className={`w-auto h-5 rounded flex justify-center items-center gap-1`}
					>
						<AiFillLike className={`w-5 h-5 text-red-500`} />
						<span
							className={`h-full flex justify-center items-center text-primary-fg font-bold`}
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
							className={`h-full flex justify-center items-center text-primary-fg font-bold`}
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
