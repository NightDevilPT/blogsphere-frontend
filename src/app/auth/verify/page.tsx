"use client";

import { Request } from "@/services/Request";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BiSolidError } from "react-icons/bi";

const page = () => {
	const [loading, setLoading] = useState<string>("loading");
	const router = useRouter();
	const params = useSearchParams();
	const token = params.get("token")
	const verifyEmail=async()=>{
		try{
			const res = await Request(`/user/verify?token=${token}`,'PUT')
			if(res.name && res.name==="AxiosError"){
				setLoading("error")
			}else{
				setLoading("success");
				console.log(res)
				router.push('/auth/login')
			}
		}catch(err){
			console.log(err,'Error')
			setLoading("Error")
		}
	}
	const filterText = () => {
		return (
			<span className={`text-primary-fg font-bold`}>
				{loading === "loading" ? "Verifing Your Mail":loading==="success"?"Email Verified":"Invalid Token"}
			</span>
		);
	};
	const filterIcons=()=>{
		return (
			loading==="loading"?<span className={`w-5 h-5 rounded-full border-2 border-border border-t-highlight animate-spin`}>
			</span>:loading==="success"?<BiSolidCheckCircle className="w-5 h-5 text-highlight" />:<BiSolidError className="w-5 h-5 text-yellow-700" />
		);
	}

	useEffect(()=>{
		verifyEmail()
	},[])

	return (
		<div className={`flex h-full justify-center items-center gap-1 flex-col`}>
			<div className="px-5 py-2 rounded bg-slate-900 flex justify-center items-center gap-4">
				{filterText()} {filterIcons()}
			</div>
			{loading==="error"&&<Link href={'/auth/resend/send-link'} className="text-highlight text-xs">Resend Verification Link</Link>}
		</div>
	);
};

export default page;
