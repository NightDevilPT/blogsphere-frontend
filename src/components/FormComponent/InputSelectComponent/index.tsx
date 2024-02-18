import React, { useState } from "react";

interface IProps {
	label: string;
	type: string;
	values: string[];
	value: string | number;
	required?: boolean;
}

const InputSelectComponent = ({ label, type, required,values,value }: IProps) => {
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
			<select
				className={`w-full bg-transparent outline-none border-none text-sm capitalize`}
				name={label}
				placeholder={`Select ${label}`}
			>
				{values.map((items:string,index:number)=><option className={`bg-secondary-bg py-1`} key={items+index} value={items}>{items}</option>)}
			</select>
		</div>
	);
};

export default InputSelectComponent;
