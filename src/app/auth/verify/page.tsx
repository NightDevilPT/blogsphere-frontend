"use client";

import Image from "next/image";
import React, { useState, useEffect,useRef } from "react";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
	const theme = useSelector((state: RootState) => state.theme);
	const params = useSearchParams();
	const [isVerified, setIsVerified] = useState<string>("verifing");
	const isTokenProcessedRef = useRef<boolean>(false);
	const router = useRouter()

	const VerifyToken = async (token: string|null) => {
		try{
			const verifyUser = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/verify?token=${token}`);
			if(verifyUser.status===200){
				setIsVerified("success")
				router.push('/auth/login',{scroll:false})
			}
		}catch(err:any){
			setIsVerified("invalid")
			console.log(err)
		}
	};

	useEffect(() => {
		const FetchUser = async()=>{
			const token = params.get("token");
			if(token && !isTokenProcessedRef.current){
				try {
					await VerifyToken(token);
				  } catch (err) {
					console.error(err);
				  } finally {
					// Set isTokenProcessedRef.current to true when component is unmounted
					if (!isTokenProcessedRef.current) {
					  isTokenProcessedRef.current = true;
					}
				  }
			}
		}
		FetchUser()

		return () => {
			if (!isTokenProcessedRef.current) {
			  isTokenProcessedRef.current = true;
			}
		  };
	}, [params]);

	return (
		<div
			className={`w-auto h-auto flex justify-center items-center gap-3 bg-slate-900 px-4 py-2 rounded`}
		>
			<span
				className={` font-roboto text-[20px] font-bold text-slate-300 capitalize`}
			>
				{isVerified === "verifing"
					? "Verifing Token"
					: isVerified === "success"
					? "Successfully Verified"
					: "Invalid Token"}
			</span>
			{isVerified === "verifing" ? (
				<span
					className={`w-[28px] h-[28px] rounded-full border-slate-700 border-t-sky-600 border-[4px] animate-spin`}
				></span>
			) : isVerified === "success" ? (
				<FaCircleCheck className={`w-[28px] h-[28px] text-green-600`} />
			) : (
				<RiErrorWarningFill
					className={`w-[28px] h-[28px] text-yellow-600`}
				/>
			)}
		</div>
	);
};

export default page;
