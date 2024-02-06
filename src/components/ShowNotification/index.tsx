
import { toast } from 'react-toastify'

const ShowNotification = (data:any) => {
	const codes = [410,404]
	if(codes.indexOf(data.statusCode)!==-1){
		console.log(codes.indexOf(data.statusCode))
		toast.warning(data.message);
	}else{
		toast.success(data.message)
	}
}

export default ShowNotification