export type ChildProps = {
	children:React.ReactNode
}

export interface Signup {
	username:string,
	username_error:boolean,
	email:string,
	email_error:boolean,
	password:string,
	password_error:boolean,
}

export interface Login {
	email:string,
	email_error:boolean,
	password:string,
	password_error:boolean,
}