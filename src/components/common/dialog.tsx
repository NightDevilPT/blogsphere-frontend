import React from "react";

interface IProps {
	children: React.ReactNode;
	show: boolean;
}

const DialogFrame = ({ children, show }: IProps) => {
	return (
		<div
			className={`w-full h-full fixed ${
				show ? "flex" : "hidden"
			} left-0 top-0 backdrop-blur z-50 justify-center items-center p-5`}
		>
			<div
				className={`relative w-[500px] max-sm:w-full h-auto p-5 rounded bg-secondary-bg`}
			>
				{children}
			</div>
		</div>
	);
};

export default DialogFrame;
