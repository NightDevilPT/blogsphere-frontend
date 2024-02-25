"use client";

import Image from "next/image";
import React from "react";

import footerImage from "../../assets/dark.png";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import InputComponent from "../FormComponent/InputComponent";

const FooteFrame = () => {
	return (
		<div className={`w-full h-auto py-10 px-5 bg-slate-950`}>
			<div className={`container grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:gap-10`}>
				<div
					className={`h-auto flex justify-start items-start gap-4 flex-col`}
				>
					<span
						className={`text-xl font-bold relative after:content-[''] text-slate-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-red-500 mb-5`}
					>
						About Us
					</span>
					<div
						className={`w-full h-auto flex justify-start items-start gap-2 flex-col`}
					>
						<Image
							src={footerImage}
							alt="footer-image"
							className={`w-48`}
						/>
						<h1 className={`text-slate-50 text-base font-bold`}>
							Welcome to BlogSphere
						</h1>
						<h3 className={`text-slate-50 text-xs`}>
							Welcome to the world of blog writing Awesome place
							to make oneself productive and entertained through
							daily updates.
						</h3>
					</div>
				</div>

				<div
					className={`w-full h-auto flex justify-start items-start flex-col gap-2 text-slate-300`}
				>
					<span
						className={`text-xl font-bold relative after:content-[''] text-slate-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-red-500 mb-5`}
					>
						Address
					</span>
					<div
						className={`w-full h-auto flex justify-start items-start gap-2 flex-col`}
					>
						<div className={`w-full h-auto flex justify-start items-start gap-2 hover:text-highlight`}>
							<IoLocationSharp className={`w-5 h-5`} />
							<span className={`text-sm font-bold`}>India, Delhi - 110094</span>
						</div>
						<div className={`w-full h-auto flex justify-start items-start gap-2 hover:text-highlight`}>
							<MdEmail className={`w-5 h-5`} />
							<span className={`text-sm font-bold`}>nightdevilpt@gmail.com</span>
						</div>
						<div className={`w-full h-auto flex justify-start items-start gap-2 hover:text-highlight`}>
							<MdPhone className={`w-5 h-5`} />
							<span className={`text-sm font-bold`}>8888888888, 9999999999</span>
						</div>
					</div>
				</div>

				<div
					className={`w-full h-auto flex justify-start items-start flex-col gap-2 text-slate-300`}
				>
					<span
						className={`text-xl font-bold relative after:content-[''] text-slate-300 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-red-500 mb-5`}
					>
						Contact Us
					</span>
					<div
						className={`w-[80%] max-lg:w-full h-auto flex justify-start items-start gap-4 flex-col`}
					>
						<InputComponent label="email" type="text" background="bg-slate-200" />
						<InputComponent label="description" type="textarea" background="bg-slate-200" />
						<button className={`w-full h-auto px-4 py-2 bg-gradient-to-br from-from via-via to-to rounded text-sm font-bold`}>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooteFrame;
