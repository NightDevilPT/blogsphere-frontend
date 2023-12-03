import React,{useEffect} from 'react'

interface IProps {
	id:string;
	message:string;
	onClose:any
}

const ToastMessage = ({id,message,onClose}:IProps) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
		//   onClose(id);
		}, 3000);
	
		return () => {
		  clearTimeout(timeoutId);
		};
	  }, [id, onClose]);
  return (
	<div className={`absolute right-2 bottom-0 m
	b-[70px] w-[300px] h-[60px] rounded bg-slate-300 flex justify-center items-center`}>

	</div>
  )
}

export default ToastMessage