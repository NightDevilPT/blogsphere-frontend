import { blogType } from "@/types/types";
import React from "react";
import HorizontalCardFrame from "../CardFrame/HorizontalCard/HorizontalCardFrame";
import VerticalCardFrame from "../CardFrame/VerticalCard/VerticalCardFrame";

interface IProps {
	blogs: blogType[];
	layout: boolean;
}

const BlogFrame = ({ blogs, layout }: IProps) => {
	return layout ? (
		<React.Fragment>
			{blogs.map((items: blogType, index: number) => (
				<HorizontalCardFrame blogs={items} key={index} />
			))}
		</React.Fragment>
	) : (
		<React.Fragment>
			{blogs.map((items: blogType, index: number) => (
				<VerticalCardFrame blogs={items} key={index} />
			))}
		</React.Fragment>
	);
};

export default BlogFrame;
