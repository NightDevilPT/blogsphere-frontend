
import { toast } from 'react-toastify'

const ShowNotification = (data:any) => {
	const codes = [410,404]
	codes.indexOf(data.statusCode)
	if(codes.indexOf(data.statusCode)){
		console.log('notified')
		toast.warning(data.message);
	}else{
		toast.success(data.message)
	}
}

export default ShowNotification