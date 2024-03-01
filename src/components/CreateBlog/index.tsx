import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import InputComponent from "../FormComponent/InputComponent";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { MultiSelect } from "primereact/multiselect";
import TextEditor from "./TextEditor/RichTextEditor";

const TagsConstants: any = [
	"Web Development",
	"Mobile App Development",
	"Artificial Intelligence",
	"Data Science",
	"Cybersecurity",
	"Internet of Things (IoT)",
	"JavaScript",
	"Python",
	"Java",
	"C++",
	"Ruby",
	"Swift",
	"Graphic Design",
	"UI/UX Design",
	"Web Design",
	"Illustration",
	"3D Design",
	"Digital Marketing",
	"Content Marketing",
	"Social Media Marketing",
	"SEO (Search Engine Optimization)",
	"Email Marketing",
	"Entrepreneurship",
	"Startups",
	"Business Strategy",
	"Finance",
	"Leadership",
	"Travel",
	"Food",
	"Health and Wellness",
	"Fitness",
	"Personal Development",
	"Physics",
	"Biology",
	"Chemistry",
	"Astronomy",
	"Environmental Science",
	"Budgeting",
	"Investing",
	"Financial Planning",
	"Cryptocurrency",
	"Online Learning",
	"Higher Education",
	"Study Tips",
	"Educational Technology",
	"Movies",
	"Music",
	"Books",
	"Gaming",
	"TV Shows",
	"Home Decor",
	"DIY (Do It Yourself)",
	"Gardening",
	"Home Improvement",
	"Job Search",
	"Career Development",
	"Workplace Tips",
	"Freelancing",
];

const tagsObjects = TagsConstants.map((tag:string) => ({
	name: tag,
	value: tag.toLowerCase(),
}));

const CreateBlogs = () => {
	const [tags, setTags] = useState(null);
	const [blogData, setBlogData] = useState<any>("");

	return (
		<div
			className={`w-full h-auto flex justify-start items-start flex-col gap-5 pb-5`}
		>
			<div
				className={`w-full h-auto flex justify-start items-start gap-5 mt-5 max-lg:flex-col`}
			>
				<button
					className={`w-96 max-lg:w-full min-w-[24rem] min-h-[300px] rounded border-[1px] border-primary-fg flex justify-center items-center flex-col gap-2 text-primary-fg`}
				>
					<IoCloudUploadOutline className={`w-10 h-10`} />
					<span className={`text-xl`}>Upload Image</span>
				</button>
				<div className={`w-full h-full`}>
					<form
						className={`w-full h-auto text-primary-fg flex justify-start items-start flex-col gap-5`}
					>
						<InputComponent
							type="text"
							label={"title"}
							required={true}
						/>
						<InputComponent
							type="textarea"
							label={"description"}
							required={true}
						/>
					</form>
				</div>
			</div>
			<div className={`w-full h-auto`}>
				<MultiSelect
					value={tags}
					onChange={(e) => {
						setTags(e.value);
					}}
					options={tagsObjects}
					optionLabel="name"
					display="chip"
					placeholder="Select Cities"
					maxSelectedLabels={5}
					className="w-full bg-secondary-bg text-primary-fg outline-none border-none mb-5"
				/>
				<TextEditor blogData={blogData} setBlogData={setBlogData} />
			</div>
			<button
				className=" bg-primary-fg w-full h-auto p-3 rounded text-primary-bg text-base"
				onClick={() => {
					console.log(blogData);
				}}
			>
				Create Blog
			</button>
		</div>
	);
};

export default CreateBlogs;

interface TagsProps {
	tags: string[];
	setTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const TagsComponent = ({ tags, setTags }: TagsProps) => {
	return (
		<div
			className={`grid grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] gap-5`}
		>
			{Object.keys(TagsConstants).map((items: string, index: number) => {
				return (
					<div
						className={`w-full h-auto flex justify-start items-start flex-col gap-1`}
						key={items + index}
					>
						<h3 className={`capitalize text-base text-primary-fg`}>
							{items}
						</h3>
						<div
							className={`w-full h-auto flex justify-start items-start flex-col gap-2 pl-5`}
						>
							{TagsConstants[items].map(
								(tag: string, index2: number) => {
									const isSelected = tags.includes(tag);
									return (
										<button
											className={`w-full h-auto flex justify-start items-center gap-3 text-primary-fg`}
											key={tag + index}
											onClick={() => {
												const updatedTags = isSelected
													? tags.filter(
															(selectedTag) =>
																selectedTag !==
																tag
													  )
													: [...tags, tag];
												setTags(updatedTags);
											}}
										>
											{isSelected ? (
												<MdCheckBox />
											) : (
												<MdCheckBoxOutlineBlank />
											)}
											<span>{tag}</span>
										</button>
									);
								}
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
