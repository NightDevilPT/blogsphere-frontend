import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Blog",
	description: "Blogsphere Create Blogs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`w-full h-full absolute left-0 top-0 bg-primary-bg overflow-y-auto`}>
			{children}
		</div>
	);
}
