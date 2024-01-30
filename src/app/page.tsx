"use client";

import React, { useEffect } from "react";

import BannerFrame from "@/components/BannerFrame";
import CarouselFrame from "@/components/CarouselFrame";
import { useSession } from "next-auth/react";

export default function Home() {
	const {data:session} = useSession()

	useEffect(()=>{
		console.log(session)
	},[session])

	return (
		<div className={`w-full bg-primary-bg`}>
			<BannerFrame />
			<CarouselFrame changeLayout={true} title={`Saved Blogs`} />
			<CarouselFrame changeLayout={false} title={`Liked Blogs`} />
		</div>
	);
}
