"use client";

import React, { useEffect } from "react";

import BannerFrame from "@/components/BannerFrame";
import CarouselFrame from "@/components/CarouselFrame";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Home() {
	const { data } = useAppSelector((state: RootState) => state.profile);
	const router = useRouter();
	useEffect(() => {
		if (data && !data?.profile) {
			router.push("/create-profile");
		}
	}, [data]);

	return (
		<div className={`w-full bg-primary-bg`}>
			<BannerFrame />
			<CarouselFrame changeLayout={true} title={`Saved Blogs`} />
			<CarouselFrame changeLayout={false} title={`Liked Blogs`} />
		</div>
	);
}
