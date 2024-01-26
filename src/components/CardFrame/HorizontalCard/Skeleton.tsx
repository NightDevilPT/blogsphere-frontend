import React from 'react'

const HorizontalSkeleton = () => {
  return (
	<div className={`relative group w-full h-auto grid-cols-2 gap-3 bg-secondary-bg rounded overflow-hidden`}>
		<div className={`w-full h-48 rounded bg-border`}></div>
		<div className={`w-full h-48 absolute left-0 -bottom-[170px] group-hover:bottom-0 transition-all duration-300 bg-secondary-bg flex justify-start  items-start gap-3 flex-col p-3`}>
			<div className={`w-full h-8 rounded bg-border`}></div>
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

export default HorizontalSkeleton