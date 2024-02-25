"use client";

import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";

import avatar from "../../../assets/avtar.png";

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setShowSearch, setShowSetting } from "@/redux/slices/dialogSlice";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/slices/profileSlice";
import { avtarConstants } from "@/constants/avtars";
import { useOutsideClick } from "@/hooks/clickOutside";
import useLanguageEffect from "@/hooks/languageHook";
import { removeItems } from "@/services/localStorage";

interface IProps {
	setShowNav: Dispatch<SetStateAction<boolean>>;
}

const UserNavFrame = ({ setShowNav }: IProps) => {
	const { data } = useAppSelector((state: RootState) => state.profile);
	const [image, setImage] = useState(
		data && data.profile ? avtarConstants[data.profile.image] : avatar.src
	);
	const [hide, setHide] = useState<boolean>(false);
	const dispatch = useDispatch();
	const userNavRef = useRef<HTMLDivElement | null>(null);
	const { theme } = useAppSelector((state: RootState) => state.theme);

	useOutsideClick(userNavRef, () => setHide(false));
	const dictionary = useLanguageEffect();

	useEffect(() => {
		setImage(
			data && data.profile
				? avtarConstants[data.profile.image]
				: avatar.src
		);
	}, [data]);

	return (
		<div
			className={`relative w-auto h-auto flex justify-center items-center gap-3`}
		>
			<button
				className={`px-2 py-1 h-7 max-[400px]:w-9 rounded bg-border text-secondary-fg flex justify-center items-center font-bold text-sm gap-2`}
				onClick={() => dispatch(setShowSearch(true))}
			>
				<span className={`max-[400px]:hidden`}>
					{dictionary?.header.search}
				</span>
				<FiSearch className={`flex-1`} />
			</button>
			<button
				className={`w-9 h-9 border-[1px] overflow-hidden border-slate-700 hover:border-[2px] hover:border-sky-700 rounded-full p-[2px]`}
				onClick={() => setHide(true)}
			>
				<img
					src={image !== "" ? image : avatar}
					alt="user-nav"
					className={`rounded-full`}
				/>
			</button>

			<div
				className={`absolute right-0 max-lg:-right-10 top-12 w-56 h-auto p-3 bg-secondary-bg rounded ${
					hide ? "flex" : "hidden"
				} shadow-xl ${
					theme === "dark"
						? " shadow-black/40"
						: "shadow-slate-900/40"
				}`}
				ref={userNavRef}
			>
				{data ? (
					<UserNavPopupFrame user={data} avtar={image} />
				) : (
					<SignupLoginFrame />
				)}
			</div>
		</div>
	);
};

export default UserNavFrame;

interface UserProps {
	user: any;
	avtar: string;
}
const UserNavPopupFrame = ({ user, avtar }: UserProps) => {
	const dispatch = useDispatch();
	const dictionary = useLanguageEffect();
	const setLogout = () => {
		dispatch(logout());
		removeItems("token");
	};
	return (
		<div className={`w-full flex justify-start items-start flex-col gap-4`}>
			<div className="w-full grid grid-cols-4 items-center gap-4">
				<img src={avtar} alt="user-nav" className={`rounded-full`} />
				<div
					className={` col-span-3 flex justify-start items-start flex-col gap-1 text-primary-fg line-clamp-1`}
				>
					<span
						className={`w-full h-auto text-left font-bold text-base`}
					>
						{user.username ? user.username : "undefined"}
					</span>
					<button
						className={`w-[calc(100%-10px)] truncate h-auto text-left font-bold text-xs whitespace-nowrap text-highlight cursor-pointer`}
						onClick={() => {
							document.execCommand("copy", true, user.id);
						}}
					>
						{user.id ? user.id : "undefined"}
					</button>
				</div>
			</div>
			<div className={`w-full h-[2px] bg-secondary-bg`}></div>
			<div
				className={`w-full h-auto flex justify-start items-start flex-col gap-1`}
			>
				<button
					className={`w-full h-auto flex justify-start items-center gap-2 text-primary-fg rounded text-sm px-2 py-2 hover:bg-border`}
				>
					<MdSpaceDashboard className={`w-5 h-5`} />
					{dictionary?.header.dashboard}
				</button>
				<button
					className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-border`}
				>
					<FaUserCircle className={`w-5 h-5`} />
					{dictionary?.header.myprofile}
				</button>
				<Link href={"/create-profile"} className="w-full">
					<button
						className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-border`}
					>
						<BiSolidEdit className={`w-5 h-5`} />
						{dictionary?.header.editprofile}
					</button>
				</Link>
				<Link href={"/setting"} className="w-full">
					<button
						className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-border`}
					>
						<RiSettingsLine className={`w-5 h-5`} />
						{dictionary?.header.setting}
					</button>
				</Link>
			</div>
			<button
				className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-red-600`}
				onClick={setLogout}
			>
				<HiOutlineLogout className={`w-5 h-5`} />
				{dictionary?.header.logout}
			</button>
		</div>
	);
};

const SignupLoginFrame = () => {
	const dictionary = useLanguageEffect();
	return (
		<div className="w-full h-auto flex justify-between items-center flex-col gap-3">
			<div className="w-full h-auto flex justify-between items-center gap-3">
				<Link
					className={`w-full h-auto py-1 font-bold text-sm rounded flex justify-center items-center gap-2 bg-primary-fg text-primary-bg`}
					href={"/auth/signup"}
				>
					{dictionary?.header.signup}
				</Link>
				<Link
					className={`w-full h-auto py-1 font-bold text-sm rounded text-center gap-2 border-[1px] border-primary-fg text-primary-fg hover:bg-primary-fg hover:text-primary-bg transition-all duration-300 line-clamp-1 truncate`}
					href={"/auth/login"}
				>
					{dictionary?.header.login}
				</Link>
			</div>
			<Link href={"/setting"} className="w-full">
				<button
					className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg rounded text-sm px-2 py-2 hover:bg-border`}
				>
					<RiSettingsLine className={`w-5 h-5`} />

					{dictionary?.header.setting}
				</button>
			</Link>
		</div>
	);
};
