import React from 'react'
import { toast } from 'react-toastify'

const ShowNotification = (data:any) => {
	if(data.statusCode===410){
		console.log('notified')
		toast.warning(data.message);
	}else{
		toast.success(data.message)
	}
}

export default ShowNotification