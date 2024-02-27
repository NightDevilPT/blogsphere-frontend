'use client'

import CarouselFrame from "@/components/CarouselFrame";
import React from "react";

const page = () => {
	return (
		<div className="container max-sm:px-5">
			<CarouselFrame title="All Blogs" changeLayout={true} />
		</div>
	);
};

export default page;
