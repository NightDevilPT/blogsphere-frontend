import React from "react";

interface IProps {
	label: string;
	type: string;
}

const InputComponent = ({ label, type }: IProps) => {
	return (
		<div
			className={`w-full relative pt-6 px-3 py-2 h-auto flex justify-start items-start flex-col bg-secondary-bg rounded`}
		>
			<label
				className={`absolute left-3 top-1 text-secondary-fg capitalize text-xs font-bold`}
			>
				{label}
			</label>
			{FilterInput(type)}
		</div>
	);
};

const FilterInput = (type: string) => {
	return type === "text" ? (
		<input
			type={type}
			className={`w-full bg-transparent outline-none border-none text-sm`}
		/>
	) : (
		<textarea
			className={`w-full h-12 bg-transparent outline-none border-none text-sm`}
		/>
	);
};

export default InputComponent;
