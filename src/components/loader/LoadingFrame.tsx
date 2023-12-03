import React from 'react'

const LoadingFrame = ({name}:{name:string}) => {
  return (
	<div className={`absolute w-full h-full left-0 top-0 backdrop-blur flex justify-center items-center flex-col gap-2`}>
		<span className="loader">
		</span>
		<p className='text-[#FF3D00] font-roboto font-bold'>{name?`${name}...`:"Loading..."}</p>
	</div>
  )
}

export default LoadingFrame