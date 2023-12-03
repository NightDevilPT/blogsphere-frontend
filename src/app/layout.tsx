import type { Metadata } from "next";
import "./globals.css";
import ReduxProvide from "@/layouts/ReduxProvide";
import HeaderFrame from "@/components/HeaderFrame";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirstCallFunction from "@/layouts/FirstCallFunction";

export const metadata: Metadata = {
	title: "BlogSphere",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`w-full h-[100vh] overflow-hidden flex justify-center items-center flex-col`}
			>
				<ReduxProvide>
					<FirstCallFunction>
						<HeaderFrame />
						{children}
					</FirstCallFunction>
				</ReduxProvide>
				<ToastContainer autoClose={2000} />
			</body>
		</html>
	);
}
