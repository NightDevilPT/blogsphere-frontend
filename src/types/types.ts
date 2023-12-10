export type ChildProps = {
	children:React.ReactNode
}

export interface LoginType {
	email:string,
	password:string
}

export interface SignupType{
	email:string,
	password:string,
	username:string
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