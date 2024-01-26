"use client";

import { setShowSearch } from "@/redux/slices/searchSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const SearchPopupFrame = () => {
	const recent = ["new", "items", "react", "javascript","new", "items", "react", "javascript"];
	const { show } = useSelector((state: RootState) => state.showSearch);
	const dispatch = useDispatch();
	return (
		<div
			className={`w-full h-full fixed ${
				show ? "flex" : "hidden"
			} left-0 top-0 backdrop-blur z-50 justify-center items-center p-5`}
		>
			<div
				className={`custom w-[500px] max-sm:w-full h-auto p-5 rounded bg-secondary-bg flex justify-start items-start flex-col gap-3`}
			>
				<div className="w-full h-auto flex justify-between items-center gap-3">
					<h1 className=" text-xl font-bold text-primary-fg">Search</h1>
					<button
						className={`rounded p-1 text-primary-fg flex justify-center items-center font-bold text-sm gap-2 bg-secondary-bg hover:bg-red-500`}
						onClick={()=>{
							dispatch(setShowSearch(false))
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
					<div className={`w-full h-auto pl-2 flex justify-start items-start flex-nowrap overflow-x-auto gap-2 py-1`}>
						{recent.map((items: string, index: number) => (
							<button
								className={`w-full text-sm font-bold p-1 px-2 bg-primary-bg text-primary-fg rounded`}
								key={items + index}
							>
								#{items}
							</button>
						))}
					</div>
				</div>
				<div className={`w-full h-auto`}>
					<span className={`text-xs text-secondary-fg font-bold`}>
						Search Tags
					</span>
					<div className={`w-full h-auto pl-2 flex justify-start items-start flex-nowrap overflow-x-auto gap-2 py-1`}>
						{recent.map((items: string, index: number) => (
							<button
								className={`w-full text-sm font-bold p-1 px-2 bg-primary-bg text-primary-fg rounded`}
								key={items + index}
							>
								#{items}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPopupFrame;
