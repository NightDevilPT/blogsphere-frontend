export type ChildProps = {
	children: React.ReactNode;
};

export interface LoginType {
	email: string;
	password: string;
}

export interface SignupType {
	email: string;
	password?: string;
	username: string;
	provider?: string;
	image?: string;
}

export interface ForgetType {
	email: string;
}

export interface UpdatePassword {
	password: string;
}

export enum HttpMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

export interface blogType {
	title: string;
	url: string;
	description: string;
	comments: number;
	likes: number;
	createdAt: number;
	context: string;
}

export interface profileType {
	firstname: string;
	lastname: string;
	gender: string;
	facebook?: string;
	instagram?: string;
	twitter?: string;
	youtube?: string;
	image: string;
	bio: string;
}

interface HeaderTranslations {
	home: string;
	blogs: string;
	contactus: string;
	aboutus: string;
	search: string;
	signup: string;
	login: string;
	dashboard: string;
	myprofile: string;
	editprofile: string;
	setting: string;
	logout: string;
}

interface BannerTranslations {
	title: string;
	subtitle: string;
	placeholder: string;
	search: string;
}

interface SettingTranslation {
	setting: string;
	theme: string;
	language: string;
	languagechange: string;
	themechange: string;
	dark: string;
	light: string;
}

interface FooterTranslation {
	aboutus: string;
	address: string;
	contactus: string;
	title: string;
	subtitle: string;
	email: string;
	description: string;
	submit: string;
}

interface ProfileTranslation{
	createprofile:string;
	updateprofile:string;
	personalinformation:string;
	socialinformation:string;
	chooseavtar:string;
	firstname:string;
	lastname:string;
	gender:string;
	bio:string;
	facebook:string;
	instagram:string;
	twitter:string;
	youtube:string;
	saveprofile:string;
	editprofile:string;
}

export interface languagesTranslation {
	header: HeaderTranslations;
	banner: BannerTranslations;
	setting: SettingTranslation;
	footer:FooterTranslation;
	profile:ProfileTranslation;
}
