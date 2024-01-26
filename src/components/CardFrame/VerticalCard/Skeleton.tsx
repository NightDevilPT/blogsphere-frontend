import React from 'react'

const VerticalSkeleton = () => {
  return (
	<div className={`w-full h-auto flex justify-start items-start flex-col gap-3 bg-secondary-bg rounded overflow-hidden`}>
		<div className={`w-full h-40 rounded bg-border`}></div>
		<div className={`w-full h-auto p-3 flex justify-start items-start flex-col gap-2`}>
			<div className={`w-full h-6 rounded bg-border`}></div>
			<div className={`w-[90%] h-4 rounded bg-border`}></div>
			<div className={`w-[90%] h-4 rounded bg-border`}></div>
			<div className={`w-[60%] h-4 rounded bg-border`}></div>
			<div className={`w-full h-auto flex justify-between items-center gap-3 mt-3`}>
				<div className={`w-16 h-5 rounded bg-border`}></div>
				<div className={`w-24 h-5 rounded bg-border`}></div>
			</div>
		</div>
	</div>
  )
}

export default VerticalSkeleton