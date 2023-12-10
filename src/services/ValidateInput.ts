import { LoginType, SignupType } from "@/types/types"
import { toast } from "react-toastify"

type DataType = SignupType|LoginType

export const ValidateInputValues = (data:DataType)=>{
	for(let items in data){
		if(data[items]===""){
			toast.info(`${items} required...`, {
				theme: "colored",
			});
			return true;
		}
	}
	return false
}