import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blogs",
	description: "Blogsphere Create Profile",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`w-full h-full bg-primary-bg py-16 overflow-y-auto`}>
			{children}
		</div>
	);
}
