import { ChildProps } from "@/types/types";
import React from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Github Login',
  description: 'Blogsphere Github Login',
}
const index = ({ children }: ChildProps) => {
	return (
		<div className={`w-full h-full absolute left-0 top-0 z-50 bg-primary-bg`}>
			{children}
		</div>
	);
};

export default index;
