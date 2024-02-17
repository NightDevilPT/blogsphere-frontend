"use client";

import PageLoading from "@/components/PageLoading";
import { Request } from "@/services/Request";
import { SignupType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { redirectRoute: string } }) => {
	const { data } = useSession();
	const [apiCalled,setApiCalled]=useState<boolean>(true);
	const router = useRouter()

	const addUser=async()=>{
		if(data && apiCalled){
			setApiCalled(false);
			const formData = {
				username:data.user?.name,
				email:data.user?.email,
				image:data.user?.image,
				provider:'github'
			}
			const res = await Request(`/user/create`,'POST',formData as SignupType);
			if(res.jwt){
				window.localStorage.setItem("token",res.jwt);
				console.log("done")
				router.push('/')
			}
		}
	}

	useEffect(() => {
		addUser()
	}, [data]);

	return (
		<div className="w-full h-full flex justify-center items-center gap-5 flex-col">
			<PageLoading text="Signing With Github..." />
		</div>
	);
};

export default page;
