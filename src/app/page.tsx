"use client";

import React, { useEffect } from "react";

import BannerFrame from "@/components/BannerFrame";
import CarouselFrame from "@/components/CarouselFrame";

export default function Home() {

	return (
		<div className={`w-full bg-primary-bg`}>
			<BannerFrame />
			<CarouselFrame changeLayout={true} title={`Saved Blogs`} />
			<CarouselFrame changeLayout={false} title={`Liked Blogs`} />
		</div>
	);
}
