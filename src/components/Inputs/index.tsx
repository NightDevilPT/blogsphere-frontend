import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface IProps {
	label?: string;
	placeholder?: string;
	value: string;
	onValueChange: any;
	emailValidation?: boolean;
	emptyValidation?: boolean;
	type?: string;
	name: string;
	disabled?:boolean
}

const CustomInput = ({
	label,
	placeholder,
	value,
	onValueChange,
	type,
	name,
	disabled
}: IProps) => {
	const [hover, setHover] = useState<boolean>(false);
	const [Type, setType] = useState<string>(type ? type : "text");

	return (
		<div
			className={`relative w-full h-[50px] rounded border-[1px] px-4 py-1  font-roboto font-bold outline-none flex justify-between items-center gap-2 ${
				hover || value !== ""
					? "border-sky-700 text-sky-700"
					: "border-slate-800 text-slate-800"
			} transition-all duration-300 hover:border-sky-700 hover:text-sky-700`}
			onFocus={(e: any) => setHover(true)}
			onBlur={(e: any) => setHover(false)}
			tabIndex={0}
		>
			{label !== "" && (
				<label
					className={`w-auto px-1 h-auto absolute left-2 top-[-11px] bg-slate-950 text-[16px]`}
				>
					{label}
				</label>
			)}
			<input
				type={Type}
				className={`outline-none border-none bg-transparent w-full h-full`}
				value={value}
				disabled={disabled?disabled:false}
				onChange={(e: any) => onValueChange({ [name]: e.target.value })}
			/>
			{name === "password" && (
				Type === "password" ? (
					<IoMdEye
						className={`w-[25px] h-[25px] cursor-pointer`}
						onClick={() => setType("text")}
					/>
				) : (
					<IoMdEyeOff
						className={`w-[25px] h-[25px] cursor-pointer`}
						onClick={() => setType("password")}
					/>
				)
			)}
		</div>
	);
};

export default CustomInput;
