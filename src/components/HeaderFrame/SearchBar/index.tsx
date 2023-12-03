import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import UserMenuFrame from "./UserMenu";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

interface IProps {
	setHamburger: any;
}

const SearchBar = ({ setHamburger }: IProps) => {
	const [query, setQuery] = useState<string>("");
	const { theme } = useAppSelector((state: RootState) => state.theme);

	return (
		<div className={`w-auto h-auto flex justify-center items-center gap-3`}>
			<div
				className={`w-[200px] h-[40px] ${theme==="dark"?"bg-slate-900":"bg-slate-300"} rounded flex p-1 pl-2 justify-between items-center gap-2`}
			>
				<input
					className={`border-none outline-none bg-transparent flex-1 max-w-[135px] text-sm font-roboto font-bold ${theme==="dark"?"placeholder:text-slate-800 text-slate-300":" placeholder::text-slate-600 text-slate-700"}`}
					value={query}
					onChange={(e: any) => setQuery(e.target.value)}
					placeholder="type here..."
				/>
				<IoIosSearch
					className={`min-w-[30px] h-auto ${theme==="dark"?"bg-slate-800":"bg-slate-600"} rounded text-slate-300 cursor-pointer p-1 hover:bg-slate-700 transition-all duration-500`}
				/>
			</div>
			<div
				className={`w-auto h-auto flex justify-center items-center gap-2`}
			>
				<UserMenuFrame />
				<HiMenu
					className={`w-[35px] h-[35px] hidden max-lg:flex ${theme==="dark"?"text-slate-300 hover:bg-slate-300 hover:text-slate-900":"text-slate-800 hover:bg-slate-800 hover:text-slate-300"} cursor-pointer rounded transition-all duration-300`}
					onClick={() => setHamburger(true)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
