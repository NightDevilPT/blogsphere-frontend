import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import dummyAvtar from "../../../../assets/avtar.png";
import avtar from "../../../../assets/profile.jpeg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { avtarConstants } from "@/constants/avtars";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { setTheme } from "@/redux/slices/themeSlice";

const UserMenuFrame = () => {
	const [show, setShow] = useState<boolean>(true);
	const { data } = useAppSelector((state: RootState) => state.profile);
	const { theme } = useAppSelector((state: RootState) => state.theme);
	const dispatch = useAppDispatch();
	const popupRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event:any) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				setShow(false);
			}
		};
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className={`relative w-[40px] h-[40px] rounded-full`} ref={popupRef}>
			<Image
				className={`w-full h-full object-contain cursor-pointer ${
					theme === "dark"
						? ""
						: "border-[1px] border-slate-600 rounded-full p-[2px]"
				}`}
				alt="user-nav"
				src={dummyAvtar}
				onClick={() => setShow(!show)}
			/>

			<div
				className={`absolute right-0 border-[1px] ${
					theme === "dark"
						? "border-slate-800 bg-slate-900"
						: "border-slate-400 bg-slate-200 shadow-lg shadow-slate-600/50"
				} ${
					show
						? " visible opacity-100 bottom-[-240px]"
						: "invisible opacity-0 bottom-[-260px]"
				} w-[250px] h-auto flex justify-start items-center flex-col gap-3 rounded transition-all duration-300 p-3`}
			>
				<Link href={"/"}>
					<div
						className={`w-full h-auto flex justify-between items-start gap-2`}
					>
						<Image
							className={`w-[60px] h-[60px] min-w-[60px] object-fit rounded overflow-hidden border-[1px] ${
								theme === "dark"
									? "border-slate-800"
									: "border-slate-500"
							}`}
							alt="user-nav"
							src={
								data?.avtar === ""
									? avtar
									: avtarConstants[data?.avtar]
							}
							width={60}
							height={60}
						/>
						<div
							className={`w-[150px] h-full flex justify-between items-start flex-col ${
								theme === "dark"
									? "text-slate-300"
									: "text-slate-800"
							}`}
						>
							<span
								className={`w-full h-auto font-roboto text-[18px] font-bold`}
							>
								{data?.username}
							</span>
							<span
								className={`w-full h-auto font-roboto text-[15px] font-bold text-sky-500 truncate`}
							>
								{data?.email}
							</span>
						</div>
					</div>
				</Link>

				<span
					className={`w-full h-[1px] ${
						theme === "dark" ? "bg-slate-800" : "bg-slate-400"
					}`}
				></span>

				<div
					className={`w-full flex justify-start items-center gap-2 flex-col`}
				>
					<div
						className={`w-full rounded flex justify-start items-center gap-2 px-2 py-2 transition-all duration-300 ${
							theme === "dark"
								? "text-slate-300 hover:bg-slate-800"
								: "text-slate-800 hover:bg-slate-800 hover:text-slate-300"
						}  active:scale-95`}
						onClick={() => {
							const change = theme === "dark" ? "light" : "dark";
							dispatch(setTheme(change));
						}}
					>
						<FaMoon className={`w-[23px] h-[23px]`} />
						<span className={`font-roboto font-bold text-[16px]`}>
							Switch Theme : {theme}
						</span>
					</div>

					<div
						className={`w-full rounded flex justify-start items-center gap-2 px-2 py-2 transition-all duration-300 hover:bg-slate-800 ${
							theme === "dark"
								? "text-slate-300 hover:bg-slate-800"
								: "text-slate-800 hover:bg-slate-800 hover:text-slate-300"
						} cursor-pointer active:scale-95`}
					>
						<FiLogOut className={`w-[25px] h-[25px]`} />
						<span className={`font-roboto font-bold text-[16px]`}>
							Logout
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserMenuFrame;
