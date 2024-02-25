"use client";

import { useAppSelector } from "@/redux/hooks";
import { setShowSearch } from "@/redux/slices/dialogSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const SearchPopupFrame = () => {
	const recent = [
		"new",
		"items",
		"react",
		"javascript",
		"new",
		"items",
		"react",
		"javascript",
	];
	const { showSearch } = useSelector((state: RootState) => state.dialog);
	const {theme}=useAppSelector((state:RootState)=>state.theme);
	const dispatch = useDispatch();
	return (
		<div
			className={`w-full h-full fixed ${
				showSearch ? "flex" : "hidden"
			} left-0 top-0 backdrop-blur z-50 justify-center items-center p-5`}
		>
			<div
				className={`custom w-[500px] max-sm:w-full h-auto p-5 rounded bg-secondary-bg flex justify-start items-start flex-col gap-3 shadow-xl  ${theme==="dark"?" shadow-black/40":"shadow-slate-900/40"}`}
			>
				<div className="w-full h-auto flex justify-between items-center gap-3">
					<h1 className=" text-xl font-bold text-primary-fg">
						Search
					</h1>
					<button
						className={`rounded p-1 text-primary-fg flex justify-center items-center font-bold text-sm gap-2 bg-secondary-bg hover:bg-red-500`}
						onClick={() => {
							dispatch(setShowSearch(false));
						}}
					>
						<MdOutlineClose className={`w-5 h-5`} />
					</button>
				</div>
				<div className="w-full h-[2px] bg-border"></div>
				<div
					className={`w-full h-auto flex justify-between items-center gap-2 bg-border px-3 py-1 rounded`}
				>
					<input
						className=" flex-1 min-w-[100px] h-6 bg-transparent text-primary-fg p-1 border-none outline-none"
						type="text"
					/>
					<button
						className={`rounded p-1 px-2 text-secondary-fg flex justify-center items-center font-bold text-sm gap-2 bg-secondary-bg`}
					>
						<FiSearch className={`w-5 h-5`} />
					</button>
				</div>
				<div className={`w-full h-auto`}>
					<span className={`text-xs text-secondary-fg font-bold`}>
						Recent Search
					</span>
					<div
						className={`w-full h-auto pl-2 flex justify-start items-start flex-nowrap overflow-x-auto gap-2 py-1`}
					>
						{recent.map((items: string, index: number) => (
							<TagButton tag={items} key={items + index} />
						))}
					</div>
				</div>
				<div className={`w-full h-auto`}>
					<span className={`text-xs text-secondary-fg font-bold`}>
						Search Tags
					</span>
					<div
						className={`w-full h-auto pl-2 flex justify-start items-start flex-nowrap overflow-x-auto gap-2 py-1`}
					>
						{recent.map((items: string, index: number) => (
							<TagButton tag={items} key={items + index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

interface TagProps {
	tag: string;
}
const TagButton = ({ tag }: TagProps) => {
	return (
		<button
			className={`w-full text-sm font-bold p-1 px-2 bg-secondary-bg shadow-sm shadow-slate-600/10 text-primary-fg hover:bg-primary-fg hover:bg-gradient-to-br hover:from-from hover:to-to hover:via-via rounded`}
		>
			#{tag}
		</button>
	);
};

export default SearchPopupFrame;
