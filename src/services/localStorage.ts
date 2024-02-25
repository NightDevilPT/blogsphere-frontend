export const setItems=(key:string,value:any)=>{
	window.localStorage.setItem(key,value);
}

export const getItems=(key:string)=>{
	return window.localStorage.getItem(key);
}

export const removeItems=(key:string)=>{
	window.localStorage.removeItem(key);
}