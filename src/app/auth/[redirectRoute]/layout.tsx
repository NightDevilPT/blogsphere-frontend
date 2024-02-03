import { ChildProps } from "@/types/types";
import Image from "next/image";
import React from "react";

import bannerImage from "../../../assets/nature-3082832_1920.jpg"

const index = ({ children }: ChildProps) => {
	return (
		<div className={`w-full h-full absolute left-0 top-0 z-50 bg-primary-bg`}>
			{children}
		</div>
	);
};

export default index;
