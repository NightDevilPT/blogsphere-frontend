import { formatNumber } from "@/services/ConvertCount";
import { blogType } from "@/types/types";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps {
	blogs: blogType;
}

const VerticalCardFrame = ({ blogs }: IProps) => {
	const [errorImage, setErrorImage] = useState<boolean>(false);

	const handleImageError = () => {
		setErrorImage(true);
	};
	return (
		<div
			className={`min-w-[320px] h-auto flex justify-start items-start flex-col bg-secondary-bg rounded overflow-hidden hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 cursor-pointer`}
		>
			<div className={`w-full h-40 overflow-hidden rounded`}>
				<LazyLoadImage
					src={
						errorImage
							? "https://via.placeholder.com/800x600.png?text=No+Image"
							: blogs.url
					}
					alt="blogs-images"
					effect="blur"
					onError={handleImageError}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				className={`w-full h-auto p-4 flex justify-start items-start flex-col gap-2`}
			>
				<div
					className={`w-full h-auto text-primary-fg text-xl truncate font-bold `}
				>
					{blogs.title}
				</div>
				<div
					className={`w-[90%] h-12 overflow-hidden rounded text-primary-fg`}
				>
					<div className="line-clamp-2 text-sm">
						{blogs.description}
					</div>
				</div>
				<div
					className={`w-full h-auto flex justify-start items-end gap-1`}
				>
					<span className={`text-xs text-primary-fg`}>
						{new Date(blogs.createdAt).toLocaleString()}
					</span>
				</div>
				<div
					className={`w-full h-auto flex justify-end items-center gap-5`}
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

export default VerticalCardFrame;
