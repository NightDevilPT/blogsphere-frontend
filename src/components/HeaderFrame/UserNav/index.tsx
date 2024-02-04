"use client";

import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";

import avatar from "../../../assets/avtar.png";
import Image from "next/image";

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setShowSearch } from "@/redux/slices/searchSlice";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

interface IProps {
	setShowNav: Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = (
	ref: React.MutableRefObject<HTMLDivElement | null>,
	callback: any
) => {
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, callback]);
};

const UserNavFrame = ({ setShowNav }: IProps) => {
	const {data} = useAppSelector((state:RootState)=>state.profile);
	const [hide, setHide] = useState<boolean>(false);
	const dispatch = useDispatch();
	const userNavRef = useRef<HTMLDivElement | null>(null);

	useOutsideClick(userNavRef, () => setHide(false));

	return (
		<div
			className={`relative w-auto h-auto flex justify-center items-center gap-3`}
		>
			<button
				className={`px-2 py-1 h-7 max-[400px]:w-9 rounded bg-border text-secondary-fg flex justify-center items-center font-bold text-sm gap-2`}
				onClick={() => dispatch(setShowSearch(true))}
			>
				<span className={`max-[400px]:hidden`}>Search</span>
				<FiSearch className={`flex-1`} />
			</button>
			<button
				className={`w-9 h-9 border-[1px] border-slate-700 hover:border-[2px] hover:border-sky-700 rounded-full p-[2px]`}
				onClick={() => setHide(true)}
			>
				<Image src={avatar} alt="user-nav" />
			</button>

			<div
				className={`absolute right-0 max-lg:-right-10 top-12 w-52 h-auto p-3 bg-border rounded ${
					hide ? "flex" : "hidden"
				}`}
				ref={userNavRef}
			>
				{data?<UserNavPopupFrame />:<SignupLoginFrame />}
			</div>
		</div>
	);
};

export default UserNavFrame;

const UserNavPopupFrame = () => {
	const user = {
		username: "NightDevilPT",
		uuid: "2525-4545-8585-6565",
	};
	return (
		<div className={`w-full flex justify-start items-start flex-col gap-4`}>
			<div className=" flex justify-start items-start gap-4">
				<Image
					src={avatar}
					alt="user-nav"
					className={`w-12 h-12 min-w-[48px] object-contain`}
				/>
				<div
					className={`flex-1 flex justify-start items-start flex-col gap-1 text-primary-fg`}
				>
					<span
						className={`w-full h-auto text-left font-bold text-base`}
					>
						{user.username ? user.username : "undefined"}
					</span>
					<button
						className={`w-[calc(100%-10px)] truncate h-auto text-left font-bold text-xs whitespace-nowrap text-highlight cursor-pointer`}
						onClick={() => {
							document.execCommand("copy", true, user.uuid);
						}}
					>
						{user.uuid ? user.uuid : "undefined"}
					</button>
				</div>
			</div>
			<div className={`w-full h-[2px] bg-secondary-bg`}></div>
			<div
				className={`w-full h-auto flex justify-start items-start flex-col gap-1`}
			>
				<button
					className={`w-full h-auto flex justify-start items-center gap-2 text-primary-fg rounded text-sm px-2 py-2 hover:bg-secondary-bg`}
				>
					<MdSpaceDashboard className={`w-5 h-5`} />
					Dashboard
				</button>
				<button
					className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-secondary-bg`}
				>
					<FaUserCircle className={`w-5 h-5`} />
					My Profile
				</button>
				<button
					className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-secondary-bg`}
				>
					<BiSolidEdit className={`w-5 h-5`} />
					Edit Profile
				</button>
				<button
					className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-secondary-bg`}
				>
					<RiSettingsLine className={`w-5 h-5`} />
					Setting
				</button>
			</div>
			<button
				className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-red-600`}
			>
				<HiOutlineLogout className={`w-5 h-5`} />
				Logout
			</button>
		</div>
	);
};

const SignupLoginFrame = () => {
	return (
		<div className="w-full h-auto flex justify-between items-center gap-3">
			<Link
				className={`w-full h-auto py-1 font-bold text-sm rounded flex justify-center items-center gap-2 bg-primary-fg text-primary-bg`}
				href={'/auth/signup'}
			>
				Signup
			</Link>
			<Link
				className={`w-full h-auto py-1 font-bold text-sm rounded flex justify-center items-center gap-2 border-[1px] border-primary-fg text-primary-fg hover:bg-primary-fg hover:text-primary-bg transition-all duration-300`}
				href={'/auth/login'}
			>
				Login
			</Link>
		</div>
	);
};
