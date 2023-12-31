export const handleChange=(setFormState:any,event:any)=>{
	setFormState((pre:any)=>({...pre,[event.target.name]:event.target.value}))
}