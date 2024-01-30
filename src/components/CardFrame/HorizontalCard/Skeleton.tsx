import React from "react";

const HorizontalSkeleton = () => {
	return (
		<div
			className={`relative group w-full h-44 flex justify-start items-start bg-secondary-bg rounded overflow-hidden`}
		>
			<div className={` w-28 min-w-[120px] h-full bg-border`}></div>
			<div
				className={`w-full h-full flex justify-start items-start gap-1 flex-col p-2`}
			>
				<div className={`w-full h-7 rounded bg-border`}></div>
				<div className={`w-full h-5 rounded bg-border mt-2`}></div>
				<div className={`w-full h-5 rounded bg-border`}></div>
				<div className={`w-[70%] h-5 rounded bg-border`}></div>

				<div
					className={`w-full h-auto flex justify-between items-center gap-3 mt-3`}
				>
					<div className={`w-16 h-5 rounded bg-border`}></div>
					<div className={`w-24 h-5 rounded bg-border`}></div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalSkeleton;
