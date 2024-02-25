"use client";

import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { blogType } from "@/types/types";
import LoadingFrame from "../LoadingFrame";
import BlogFrame from "../BlogFrame";

interface IProps {
	changeLayout?: boolean;
	title: string;
}

const CarouselFrame = ({ changeLayout, title }: IProps) => {
	const [layout, setLayout] = useState<boolean>(true);
	const [loading,setLoading]=useState<boolean>(false);
	const blogs: blogType[] = [
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
		{
			title: "React Tutorial Web Development",
			description:
				"A description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping forA description puts something in words, like a portrait puts a person in paint. The lawnmower you came home with did not quite fit the description of the dishwasher you went shopping for",
			context: "",
			likes: 185900,
			comments: 2000,
			url: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
			createdAt: 1706244252756,
		},
	];

	setInterval(()=>{
		setLoading(true);
	},3000)

	return (
		<div className={`w-full h-auto p-5 transition-all duration-300`}>
			<div
				className={`container flex justify-start items-start gap-3 flex-col`}
			>
				<div
					className={`w-full h-full flex justify-between items-center gap-5`}
				>
					<h3 className={`text-base text-primary-fg font-bold `}>
						{title}
					</h3>
					{changeLayout && (
						<button
							className={`w-auto h-auto relative grid grid-cols-2 gap-2 p-2 justify-center items-center rounded bg-secondary-bg`}
							onClick={(event: any) => {
								setLayout(!layout);
							}}
						>
							<div
								className={`w-7 h-7 absolute rounded ${
									layout ? "left-[5px]" : "left-[50%]"
								} transition-all duration-300 bg-gradient-to-br from-from via-via to-to`}
							></div>
							<TfiLayoutListThumbAlt
								className={`w-5 h-5 relative z-10 transition-all delay-200 duration-200 ${
									layout
										? "text-primary-fg"
										: "text-primary-fg"
								}`}
							/>
							<BsGridFill
								className={`w-5 h-5 relative z-10  transition-all delay-200 duration-200 ${
									!layout
										? "text-primary-fg"
										: "text-primary-fg"
								}`}
							/>
						</button>
					)}
				</div>
				<div
					className={`w-full h-auto grid ${
						blogs.length > 2
							? "grid-cols-[repeat(auto-fit,_minmax(320px,1fr))]"
							: "grid-cols-4"
					} gap-4`}
				>
					{loading ? (
						<BlogFrame blogs={blogs} layout={layout} />
					) : (
						<LoadingFrame layout={layout} />
					)}
				</div>
			</div>
		</div>
	);
};

export default CarouselFrame;
