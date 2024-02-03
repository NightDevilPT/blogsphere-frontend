export type ChildProps = {
	children:React.ReactNode
}

export interface LoginType {
	email:string,
	password:string
}

export interface SignupType{
	email:string,
	password?:string,
	username:string,
	provider?:string,
	image?:string
}

export interface ForgetType {
	email:string
}

export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export interface blogType{
	title:string;
	url:string;
	description:string;
	comments:number;
	likes:number;
	createdAt:number;
	context:string;
}