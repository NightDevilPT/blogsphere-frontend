import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

interface IProps {
	label: string;
	type: string;
	required?: boolean;
}

const InputComponent = ({ label, type, required }: IProps) => {
	return (
		<div
			className={`w-full relative pt-6 px-3 py-2 h-auto flex justify-start items-start flex-col bg-secondary-bg rounded`}
		>
			<label
				className={`absolute left-3 top-1 text-secondary-fg capitalize text-xs font-bold flex justify-start items-start gap-1`}
			>
				{label}
				{required && <span className="text-red-500">*</span>}
			</label>
			{FilterInput(type, required, label)}
		</div>
	);
};

const FilterInput = (type: string, required: boolean|undefined, label: string) => {
	const [showPassword, setShowPassword] = useState<string>("password");
	return type === "text" || type === "email" ? (
		<input
			name={label}
			type={type}
			required={required}
			className={`w-full bg-transparent outline-none border-none text-sm`}
		/>
	) : type === "password" ? (
		<div className={`w-full h-auto flex justify-start items-start gap-2`}>
			<input
				name={label}
				type={showPassword}
				required={required}
				className={`w-full bg-transparent outline-none border-none text-sm`}
			/>
			<button
				className={`w-6 h-6 p-1 rounded bg-border`}
				onClick={(event: any) => {
					event.preventDefault();
					setShowPassword(
						showPassword === "password" ? "text" : "password"
					);
				}}
			>
				{showPassword === "password" ? (
					<IoMdEye className={`w-full h-full text-primary-fg`} />
				) : (
					<IoMdEyeOff className={`w-full h-full text-primary-fg`} />
				)}
			</button>
		</div>
	) : (
		<textarea
			className={`w-full h-12 bg-transparent outline-none border-none text-sm`}
		/>
	);
};

export default InputComponent;
