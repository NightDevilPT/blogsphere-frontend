import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import ReduxProvide from "@/layouts/ReduxProvide";
import FirstCallFunction from "@/layouts/FirstCallFunction";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Blogsphere Home',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" data-theme="dark">
			<body className={`w-full h-full overflow-hidden overflow-y-auto`}>
				<ReduxProvide>
					<FirstCallFunction>{children}</FirstCallFunction>
				</ReduxProvide>
			</body>
		</html>
	);
}
