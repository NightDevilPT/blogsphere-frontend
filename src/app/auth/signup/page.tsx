"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import avtar from "../../../assets/form.png"
import { SignupType } from "@/types/types";
import { handleChange } from "@/services/HandleInputChange";

const index = () => {
	const [form,setForm]=useState<SignupType>({
		username:"",
		email:"",
		password:""
	});

	return (
		<div
			className={`w-full h-full bg-primary-bg flex justify-center items-center z-50`}
		>
			<div className={`border-[1px] border-border rounded-md w-[1000px] h-auto flex justify-between items-center gap-4 p-4`}>
				<div className={`w-[400px] min-w-[400px] h-[400px] flex justify-center items-center`}>
					<Image src={avtar} alt="signup-image" className=" object-contain" priority />
				</div>
				<div className={`w-full h-auto flex justify-center items-center gap-5 flex-col`}>
					<h1 className={`w-full h-auto text-center text-primary-fg font-ubuntu text-4xl`}>Signup</h1>
					<span className="w-[90%] h-[1px] bg-border"></span>
					<form className="flex justify-center items-center flex-col gap-3">
					</form>
				</div>
			</div>
		</div>
	);
};

export default index;
