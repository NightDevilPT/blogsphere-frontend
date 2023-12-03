"use client"

import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux'

const CardSkeleton = () => {
	const theme = useSelector((state:RootState)=>state.theme);
  return (
	<div className={`w-full max-w-[320px] min-w-[280px] h-auto p-3 ${theme==="dark"?"bg-slate-900":""} rounded flex justify-center items-center flex-col gap-4`}>
		<div className={`w-full h-[170px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
		<div className='w-full h-auto relative flex justify-center items-end flex-col gap-[10px]'>
			<div className={`w-[80px] h-[65px] absolute left-0 top-0 p-1 flex justify-center items-center ${theme==="dark"?"bg-slate-900":""}`}>
				<div className={`w-[58px] h-[58px] rounded-full ${theme==="dark"?"bg-slate-800":""}`}></div>
			</div>
			<div className={`w-full h-[25px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
			<div className={`w-full h-[25px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
			<div className={`w-full h-[25px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
			<div className={`w-full h-[25px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
			<div className={`w-full h-[25px] rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
			<div className={`w-[60%] h-[20px] mt-1 rounded-sm ${theme==="dark"?"bg-slate-800":""}`}></div>
		</div>
	</div>
  )
}

export default CardSkeleton